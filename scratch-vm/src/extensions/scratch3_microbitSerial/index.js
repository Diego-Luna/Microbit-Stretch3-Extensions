const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

let port;
let writer;
let reader;
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

        const textDecoder = new TextDecoderStream();
        const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
        reader = textDecoder.readable.getReader();

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
            await reader.cancel();
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

const imgURI = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjUuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Ik1vb25NYWtlcnMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDgwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTA4MCA1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojREYyMTI4O30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4MC41OSwyMDIuOTJsNDYuNjctNzMuODljMS4yMy0xLjk0LDQuMjMtMS4wNyw0LjIzLDEuMjJ2MTA4LjAxaDQ3LjY0VjUzLjg0aC01MC44NmwtNDQuMDUsNzAuMDYKCWMtMS42NiwyLjY0LTUuNTIsMi41OS03LjEtMC4wOWwtNDEuNDgtNjkuOTdoLTUxLjMxdjE4NC40Mmg0NS40MVYxMzQuMTVjMC0yLjI3LDIuOTQtMy4xNiw0LjItMS4yN0wyODAuNTksMjAyLjkyeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDg1LjU3LDkyLjY1Yy00Mi45NCwwLTc3Ljc1LDMyLjkxLTc3Ljc1LDczLjUxczM0LjgxLDczLjUxLDc3Ljc1LDczLjUxczc3Ljc1LTMyLjkxLDc3Ljc1LTczLjUxCglTNTI4LjUxLDkyLjY1LDQ4NS41Nyw5Mi42NXogTTQ4NC4xNiwyMDAuMDljLTE3Ljk2LDAtMzIuNTEtMTUuNTEtMzIuNTEtMzQuNjNzMTQuNTYtMzQuNjMsMzIuNTEtMzQuNjMKCWMxNy45NiwwLDMyLjUxLDE1LjUxLDMyLjUxLDM0LjYzUzUwMi4xMSwyMDAuMDksNDg0LjE2LDIwMC4wOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2My42OSw5Ni44OWMtNDIuOTQsMC03Ny43NSwzMi45MS03Ny43NSw3My41MXMzNC44MSw3My41MSw3Ny43NSw3My41MXM3Ny43NS0zMi45MSw3Ny43NS03My41MQoJUzcwNi42Myw5Ni44OSw2NjMuNjksOTYuODl6IE02NjIuMjgsMjA0LjMzYy0xNy45NiwwLTMyLjUxLTE1LjUxLTMyLjUxLTM0LjYzczE0LjU2LTM0LjYzLDMyLjUxLTM0LjYzczMyLjUxLDE1LjUxLDMyLjUxLDM0LjYzCglTNjgwLjI0LDIwNC4zMyw2NjIuMjgsMjA0LjMzeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODEzLjI0LDE1My4yOXY4MS42M2gtNDYuMzRWOTQuMDdoNDUuMjR2MTUuNTZjMCw0LjI2LDUuMzgsNi4xNyw4LjAzLDIuODRjOC4wNS0xMC4xMywxNS4zNC0xOS44MSwzNy4yMS0xOS44MQoJYzM2Ljc2LDAsNDguMDYsMjUuNDUsNDguNSwzOC4xN3MwLDEwNC4xLDAsMTA0LjFoLTQ3LjA5di03OC42NUM4NjAuMTksMTI1LjE3LDgxMi45MywxMjQuODYsODEzLjI0LDE1My4yOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3My42OSw0MTAuNzhsNDYuNjctNzMuODljMS4yMy0xLjk0LDQuMjMtMS4wNyw0LjIzLDEuMjJ2MTA4LjAxaDQ3LjY0VjI2MS43MWgtNTAuODZsLTQ0LjA1LDcwLjA2CgljLTEuNjYsMi42NC01LjUyLDIuNTktNy4xLTAuMDlsLTQxLjQ4LTY5Ljk3SDc3LjQzdjE4NC40Mmg0NS40MVYzNDIuMDFjMC0yLjI3LDIuOTQtMy4xNiw0LjItMS4yN0wxNzMuNjksNDEwLjc4eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDM2LjE2LDM0OS42Yy0wLjk0LTMyLjEyLTMyLjA0LTQ2LjI2LTYzLjE0LTQ3LjY3Yy0zMS4xLTEuNDEtNjIuMiwxMS4zMS02Mi4yLDExLjMxbDExLjMxLDMyLjUxCgljMCwwLDE1LjUxLTguNDgsMzguMTctOC40OGMxOS43OSwwLDMxLjEsOS45LDMxLjIxLDI3Ljk4YzAuMDEsMi4zLTEuOTYsMy45OC0zLjk2LDIuODZjLTguNzQtNC44OS0yNS4xOS01LjM5LTM4LjU2LTUuMzkKCWMtMTkuNzksMC00OS40OCw3LjA3LTQ5LjQ4LDQzLjgyczMzLjkzLDQzLjgyLDQ4LjA2LDQzLjgyYzE4LjA3LDAsMzEuODYtMTEuNCwzOC4zNC0xOC4wMWMxLjQ5LTEuNTIsNC4wNy0wLjQ1LDQuMDcsMS42OHYxMi4wOQoJaDQ2LjE3QzQzNi4xNiw0NDYuMTMsNDM3LjEsMzgxLjcyLDQzNi4xNiwzNDkuNnogTTM0Ny41Nyw0MTYuNDRjLTEzLjQzLTE1LjM0LDEuNDEtMzEuMSwxNS41NS0zMi41MWMxMC4xNi0xLjAyLDIwLDEuMjMsMjQuNzMsMi41OAoJYzEuNzksMC41MSwyLjk1LDIuMTIsMy4xMywzLjk4QzM5NC4yMyw0MjMuNTEsMzU3LjE3LDQyNy40MSwzNDcuNTcsNDE2LjQ0eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDcwLjU2LDI1MS4wNHYxOTEuNjRoNDYuNjV2LTMyLjI2bDExLjQyLTEzLjZjMi4wOS0yLjIzLDUuNzItMS44OCw3LjM0LDAuNzFsMjcuMzgsNDUuMTRoNDkuOWwtNDcuNDItODAuODQKCWMtMS4xOC0yLjAxLTAuOTYtNC41NSwwLjU1LTYuMzNsNDUuNTQtNTMuNThoLTUyLjMxbC0zNy4xNSw0Ny4xOWMtMS43NSwyLjE3LTUuMjYsMC45NC01LjI2LTEuODZ2LTk2LjIzSDQ3MC41NnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTc4NS42NCw0NDYuOTJoNDYuNTdjMCwwLTEuNjYtMzYuMDgsMC01NS4xOWMxLjY2LTE5LjExLDE0LjM5LTM4LjksNDUuNDktMzguOXYtNDkuNDgKCWMwLDAtMTguMzcsMC4yMy0yNi44Niw4LjQ4Yy02LjcxLDYuNTMtMTIuMywxNi4wNi0xNS4zMSwyMS43MmMtMS4wMSwxLjg4LTMuODYsMS4xNy0zLjg2LTAuOTd2LTI2LjY2aC00Ni4wM1Y0NDYuOTJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NjcuODMsMzg2Ljc1aDkyLjIzYzAsMCwxLjcyLTI5LjY5LTYuNzYtNDYuNjVzLTIwLjI4LTM5LjU4LTYzLjYyLTM5LjU4Yy00My4zNCwwLTcwLjY4LDMyLjUxLTcyLjEsNzQuOTIKCWMtMS40MSw0Mi40MSwzMS4zLDczLjUxLDc1LjczLDcyLjFjNDQuNDMtMS40MSw1OS45OC0yNi44Niw1OS45OC0yNi44NmwtMjUuNDUtMjEuMjFjMCwwLTEyLjcyLDE1LjU1LTMyLjUxLDE1LjU1CgljLTE3LjA2LDAtMjkuMjMtMTEuNTYtMzEuODgtMjIuODlDNjYyLjgyLDM4OS4zNyw2NjQuOTksMzg2Ljc1LDY2Ny44MywzODYuNzV6IE02NjIuODIsMzY0LjEzYzAsMC0yLjgzLTMyLjUxLDI2LjA1LTMwLjY3CgljMjguODgsMS44NCwyNy42NywzMC42NywyNy42NywzMC42N0g2NjIuODJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05OTMuNDksMzQzLjc4bDE1LjY4LTI5LjEyYzAsMC0xNy40Ny0xNS41NS01NC42OC0xNS41NXMtNTkuNTQsMjAuMTItNTguMjcsNDYuODEKCWMxLjI3LDI2LjcsMTYuODIsMzMuNzcsNDIuMjcsNDIuMjVjMjUuNDUsOC40OCwzMi41MSw4LjQ4LDMyLjUxLDE2Ljk2cy03LjA3LDExLjMxLTI0LjAzLDkuOXMtMzkuNTgtMTYuOTYtMzkuNTgtMTYuOTZsLTE2LjIxLDI3LjkKCWMwLDAsMjMuMDksMjEuNjcsNjYuMywyMC4yMXM1NC41Mi0xOS44LDU0LjUyLTQ4LjExYzAtMjYuODYtMTkuODktMzUuNTctMzguOTItMzkuN3MtMzYuNDYtOC40NC0zNC41OS0xOS42OAoJYzEuNDEtOC40OCwxNS4yOS04LjEzLDI1LjQ1LTcuMDdDOTc0LjEsMzMyLjY4LDk5My40OSwzNDMuNzgsOTkzLjQ5LDM0My43OHoiLz4KPC9zdmc+Cg=="

class MicrobitSerial {
    getInfo() {
        return {
            id: 'microbitSerial',
            name: formatMessage({
                id: 'microbitSerial.name',
                default: 'Micro:bit Serial'
            }),
            menuIconURI: imgURI, // Your icon in base64
            blockIconURI: imgURI, // Your icon in base64
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
                    opcode: 'disconnect',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'microbitSerial.disconnect',
                        default: 'Disconnect from micro:bit'
                    })
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
                }
            ],
            menus: {},
            translation_map: {
                'es': {
                    'microbitSerial.name': 'Micro:bit Serial',
                    'microbitSerial.connect': 'Conectar a la micro:bit',
                    'microbitSerial.disconnect': 'Desconectar de la micro:bit',
                    'microbitSerial.sendData': 'Enviar [DATA] a la micro:bit',
                    'microbitSerial.receiveData': 'Recibir datos de la micro:bit',
                    'microbitSerial.defaultData': 'Hola micro:bit'
                },
                'en': {
                    'microbitSerial.name': 'Micro:bit Serial',
                    'microbitSerial.connect': 'Connect to micro:bit',
                    'microbitSerial.disconnect': 'Disconnect from micro:bit',
                    'microbitSerial.sendData': 'Send [DATA] to micro:bit',
                    'microbitSerial.receiveData': 'Receive data from micro:bit',
                    'microbitSerial.defaultData': 'Hello micro:bit'
                }
            }
        };
    }

    connect() {
        if (!isConnected) {
            connect();
        }
    }

    disconnect() {
        disconnect();
    }

    sendData(args) {
        sendData(args.DATA);
    }

    async receiveData() {
        const data = await receiveData();
        return data ? data.toString() : '';
    }
}

module.exports = MicrobitSerial;
