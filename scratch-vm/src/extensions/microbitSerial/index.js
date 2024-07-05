const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

let port;
let writer;
let isConnected = false;

async function connect() {
    if (!('serial' in navigator)) {
        alert('Tu navegador no soporta la API Web Serial');
        return;
    }

    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });

        const textEncoder = new TextEncoderStream();
        const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
        writer = textEncoder.writable.getWriter();

        isConnected = true;
        console.log('Conectado a la micro:bit');
    } catch (error) {
        console.error('Error al conectar:', error);
    }
}

async function disconnect() {
    if (isConnected && port) {
        try {
            await writer.close();
            await port.close();
            isConnected = false;
            console.log('Conexión cerrada');
        } catch (error) {
            console.error('Error al desconectar:', error);
        }
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

class MicrobitSerial {
    getInfo() {
        return {
            id: 'microbitSerial',
            name: 'Micro:bit Serial',
            blocks: [
                {
                    opcode: 'connect',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'microbitSerial.connect',
                        default: 'Conectar a la micro:bit'
                    })
                },
                {
                    opcode: 'disconnect',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'microbitSerial.disconnect',
                        default: 'Desconectar de la micro:bit'
                    })
                },
                {
                    opcode: 'sendData',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'microbitSerial.sendData',
                        default: 'Enviar [DATA] a la micro:bit'
                    }),
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hola micro:bit'
                        }
                    }
                }
            ]
        };
    }

    connect() {
        connect();
    }

    disconnect() {
        disconnect();
    }

    sendData(args) {
        sendData(args.DATA);
    }
}

module.exports = MicrobitSerial;
