const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const tf = require('@tensorflow/tfjs');

let port;
let writer;
let reader;
let isConnected = false;
let classNames = [];
let dataByClass = [];
let model;

let sampleCount = {};

async function connect() {
    if (!('serial' in navigator)) {
        alert('Tu navegador no soporta la API Web Serial');
        return;
    }

    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });

        const textEncoder = new TextEncoderStream();
        const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
        writer = textEncoder.writable.getWriter();

        const textDecoder = new TextDecoderStream();
        const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
        reader = textDecoder.readable.getReader();

        isConnected = true;
        console.log('Conectado a la micro:bit');
    } catch (error) {
        console.error('Error al conectar:', error);
    }
}

async function sendData(dataToSend) {
    if (isConnected && writer) {
        try {
            await writer.write(dataToSend + '\n');
            console.log('Datos enviados:', dataToSend);
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    } else {
        console.log('No hay conexión activa');
    }
}

async function receiveData() {
    if (isConnected && reader) {
        try {
            const { value, done } = await reader.read();
            if (done) {
                console.log('Stream cerrado');
                return null;
            }
            console.log('Datos recibidos:', value);
            return value;
        } catch (error) {
            console.error('Error al recibir datos:', error);
            return null;
        }
    }
    return null;
}

function normalizeData(data) {
    return data.map(val => val / 1023);
}

async function readDataFromMicrobit() {
    await sendData("on");
    const data = [];
    let check = "0";
    let lineBuffer = '';
    while (check !== "off\n") {
        const { value, done } = await reader.read();
        if (done) {
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            break;
        }
        if (value) {
            lineBuffer += value;
            let newlineIndex;
            while ((newlineIndex = lineBuffer.indexOf('\n')) >= 0) {
                const line = lineBuffer.substring(0, newlineIndex + 1);
                lineBuffer = lineBuffer.substring(newlineIndex + 1);

                if (line !== "off\n") {
                    console.log(line.trim());
                    const pinValues = line.trim().split(',').map(pin => parseFloat(pin.split(':')[1]));
                    console.log(pinValues);
                    if (pinValues.length === 3) {
                        data.push(pinValues);
                    } else {
                        console.log("error in line:", line);
                        data.push([0, 0, 0]); // Valores por defecto si no se reciben datos completos
                    }
                }
                check = line;
            }
        }
    }
    const normalizedData = normalizeData(data.flat());
    console.log("data:", normalizedData);
    console.log("data length:", normalizedData.length);
    return normalizedData;
}

function prepareData() {
    const maxLength = Math.max(...dataByClass.flat().map(arr => arr.length));
    dataByClass = dataByClass.map(classData =>
        classData.map(sample =>
            sample.length === maxLength ? sample : [...sample, ...Array(maxLength - sample.length).fill(0)]
        )
    );

    const samples = dataByClass.flatMap((samples, index) =>
        samples.map(sample => ({ xs: sample, ys: index }))
    );

    if (samples.length === 0) {
        alert('No hay suficientes muestras para entrenar el modelo');
        return;
    }

    const inputSize = samples[0].xs.length;
    const xs = tf.tensor2d(samples.map(sample => sample.xs), [samples.length, inputSize]);
    const ys = tf.tensor1d(samples.map(sample => sample.ys), 'float32');

    const numClasses = classNames.length;

    return { xs, ys, inputSize, numClasses };
}

async function trainConvolutionalModel() {
    const { xs, ys, inputSize, numClasses } = prepareData();

    const reshapedXs = xs.reshape([xs.shape[0], inputSize / 3, 3]);

    model = tf.sequential();
    model.add(tf.layers.conv1d({ inputShape: [inputSize / 3, 3], filters: 16, kernelSize: 3, activation: 'relu' }));
    model.add(tf.layers.maxPooling1d({ poolSize: 2 }));
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 10, activation: 'relu' }));
    model.add(tf.layers.dense({ units: numClasses, activation: 'softmax' }));

    model.compile({ loss: 'sparseCategoricalCrossentropy', optimizer: 'adam', metrics: ['accuracy'] });

    console.log('Entrenando modelo convolucional...');
    await model.fit(reshapedXs, ys, {
        epochs: 200,
        callbacks: {
            onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch + 1}: loss = ${logs.loss}, accuracy = ${logs.acc}`)
        }
    });
    console.log('Entrenamiento completo.');
}

async function predict() {
    if (!model || !model.layers) {
        alert('Modelo no cargado o entrenado.');
        return '';
    }

    let data = await readDataFromMicrobit();

    const inputShape = model.layers[0].input.shape;
    const dimensions = inputShape.length;
    const inputSize = model.layers[0].input.shape[1];
    let reshapedData;

    if (dimensions === 3) {
        const channels = model.layers[0].input.shape[2];
        const expectedInputSize = inputSize * channels;
        if (data.length !== expectedInputSize) {
            if (data.length < expectedInputSize) {
                data = [...data, ...Array(expectedInputSize - data.length).fill(0)];
            } else {
                data = data.slice(0, expectedInputSize);
            }
        }
        reshapedData = tf.tensor(data).reshape([1, inputSize, channels]);
    } else {
        alert('Modelo no soportado.');
        return '';
    }

    const prediction = model.predict(reshapedData);
    const predictedClass = prediction.argMax(-1).dataSync()[0];
    console.log(`Predicción: ${classNames[predictedClass]}`);
    return classNames[predictedClass];
}

async function downloadModel() {
    if (model) {
        await model.save('downloads://microbit-model');
        const classNamesBlob = new Blob([JSON.stringify(classNames)], { type: 'application/json' });
        const classNamesUrl = URL.createObjectURL(classNamesBlob);
        const a = document.createElement('a');
        a.href = classNamesUrl;
        a.download = 'classNames.json';
        a.click();
        URL.revokeObjectURL(classNamesUrl);
        console.log('Modelo y nombres de clases descargados.');
    } else {
        alert('No hay modelo entrenado para descargar.');
    }
}

async function loadModel(jsonFile, binFile, classNamesFile) {
    model = await tf.loadLayersModel(tf.io.browserFiles([jsonFile, binFile]));

    const classNamesResponse = await fetch(URL.createObjectURL(classNamesFile));
    classNames = await classNamesResponse.json();

    console.log('Modelo y nombres de clases cargados.');
}

class MicrobitSerial {
    getInfo() {
        return {
            id: 'microbitSerial',
            name: formatMessage({
                id: 'microbitSerial.name',
                default: 'Micro:bit Serial'
            }),
            menuIconURI: imgMenu, // Your icon in base64
            blockIconURI: imgBLOC, // Your icon in base64
            blocks: [
                {
                    opcode: 'connect',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'microbitSerial.connect',
                        default: 'Connect to micro:bit'
                    })
                },
                {
                    opcode: 'setClassCount',
                    blockType: BlockType.COMMAND,
                    text: 'Set number of classes [CLASS_COUNT]',
                    arguments: {
                        CLASS_COUNT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2,
                            menu: 'classCountMenu'
                        }
                    }
                },
                {
                    opcode: 'setClassName',
                    blockType: BlockType.COMMAND,
                    text: 'Set class [CLASS_INDEX] name to [CLASS_NAME]',
                    arguments: {
                        CLASS_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: 'classIndexMenu'
                        },
                        CLASS_NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Class 1'
                        }
                    }
                },
                {
                    opcode: 'collectDataForClass',
                    blockType: BlockType.COMMAND,
                    text: 'Collect data for class [CLASS_INDEX]',
                    arguments: {
                        CLASS_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: 'classIndexMenu'
                        }
                    }
                },
                {
                    opcode: 'sendData',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'microbitSerial.sendData',
                        default: 'Send [DATA] to micro:bit'
                    }),
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'microbitSerial.defaultData',
                                default: 'Hello micro:bit'
                            })
                        }
                    }
                },
                {
                    opcode: 'receiveData',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'microbitSerial.receiveData',
                        default: 'Receive data from micro:bit'
                    })
                },
                {
                    opcode: 'trainConvolutionalModel',
                    blockType: BlockType.COMMAND,
                    text: 'Train Convolutional Model'
                },
                {
                    opcode: 'predict',
                    blockType: BlockType.REPORTER,
                    text: 'Predict'
                },                
                {
                    opcode: 'downloadModel',
                    blockType: BlockType.COMMAND,
                    text: 'Download Model'
                },
                {
                    opcode: 'loadModel',
                    blockType: BlockType.COMMAND,
                    text: 'Load Model'
                },
                {
                    opcode: 'getSampleCount',
                    blockType: BlockType.REPORTER,
                    text: 'Sample count for class [CLASS_INDEX]',
                    arguments: {
                        CLASS_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: 'classIndexMenu'
                        }
                    }
                }
            ],
            menus: {
                classCountMenu: {
                    acceptReporters: true,
                    items: ['2', '3', '4', '5', '6', '7', '8', '9', '10']
                },
                classIndexMenu: {
                    acceptReporters: true,
                    items: 'getClassNames'
                }
            },
            translation_map: {
                'es': {
                    'microbitSerial.name': 'Micro:bit Serial',
                    'microbitSerial.connect': 'Conectar a la micro:bit',
                    'microbitSerial.sendData': 'Enviar [DATA] a la micro:bit',
                    'microbitSerial.receiveData': 'Recibir datos de la micro:bit',
                    'microbitSerial.defaultData': 'Hola micro:bit',
                    'microbitSerial.getSampleCount': 'Número de muestras por clase'
                },
                'en': {
                    'microbitSerial.name': 'Micro:bit Serial',
                    'microbitSerial.connect': 'Connect to micro:bit',
                    'microbitSerial.sendData': 'Send [DATA] to micro:bit',
                    'microbitSerial.receiveData': 'Receive data from micro:bit',
                    'microbitSerial.defaultData': 'Hello micro:bit',
                    'microbitSerial.getSampleCount': 'Sample count for class'
                }
            }
        };
    }

    connect() {
        if (!isConnected) {
            connect();
        }
    }

    setClassCount(args) {
        const classCount = parseInt(args.CLASS_COUNT);
        classNames = Array.from({ length: classCount }, (_, i) => `Class ${i + 1}`);
        dataByClass = Array(classCount).fill().map(() => []);
        sampleCount = {}; // Reset sample count
        classNames.forEach((_, index) => sampleCount[index + 1] = 0); // Initialize sample count for each class
    }

    setClassName(args) {
        const classIndex = parseInt(args.CLASS_INDEX) - 1;
        const className = args.CLASS_NAME;
        if (classIndex >= 0 && classIndex < classNames.length) {
            classNames[classIndex] = className;
        }
    }

    async collectDataForClass(args) {
        const classIndex = parseInt(args.CLASS_INDEX) - 1;
        if (classIndex >= 0 && classIndex < classNames.length) {
            const data = await readDataFromMicrobit();
            dataByClass[classIndex].push(data);
            sampleCount[classIndex + 1]++; // Increment sample count for the specific class
            console.log(`Agregada muestra para la clase ${classNames[classIndex]}:`, dataByClass[classIndex]);
        }
    }

    sendData(args) {
        sendData(args.DATA);
    }

    async receiveData() {
        const data = await receiveData();
        return data ? data.toString() : '';
    }

    async trainConvolutionalModel() {
        await trainConvolutionalModel();
    }

    async predict() {
        const prediction = await predict();
        return prediction;
    }

    downloadModel() {
        downloadModel();
    }

    loadModel(args) {
        const jsonInput = document.getElementById('json-input').files[0];
        const binInput = document.getElementById('bin-input').files[0];
        const classNamesInput = document.getElementById('classNames-input').files[0];
        loadModel(jsonInput, binInput, classNamesInput);
    }

    getClassNames() {
        if (classNames.length === 0) {
            return [{ text: 'Class 1', value: '1' }];
        }
        return classNames.map((name, index) => ({ text: name || `Class ${index + 1}`, value: `${index + 1}` }));
    }

    getSampleCount(args) {
        const classIndex = parseInt(args.CLASS_INDEX);
        return sampleCount[classIndex] || 0;
    }
}

module.exports = MicrobitSerial;
