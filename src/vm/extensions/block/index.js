import BlockType from '../../extension-support/block-type';
import ArgumentType from '../../extension-support/argument-type';
import Cast from '../../util/cast';
import translations from './translations.json';
import blockIcon from './block-icon.png';

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
let formatMessage = messageData => messageData.defaultMessage;

/**
 * Setup format-message for this extension.
 */
const setupTranslations = () => {
  const localeSetup = formatMessage.setup ? formatMessage.setup() : null;
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(
      localeSetup.translations[localeSetup.locale],
      translations[localeSetup.locale]
    );
  }
};

const EXTENSION_ID = 'microbitSerial';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
// let extensionURL = 'https://tu-url-de-extension/microbitSerial.mjs';
let extensionURL = 'https://github.com/Diego-Luna/Microbit-Stretch3-Extensions/dist/microbitSerial.mjs';

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

/**
 * Scratch 3.0 blocks for micro:bit Serial Extension.
 */
class ExtensionBlocks {

  /**
   * A translation object which is used in this class.
   * @param {FormatObject} formatter - translation object
   */
  static set formatMessage (formatter) {
    formatMessage = formatter;
    if (formatMessage) setupTranslations();
  }

  /**
   * @return {string} - the name of this extension.
   */
  static get EXTENSION_NAME() {
    return formatMessage({
      id: 'microbitSerial.name',
      default: translations.en['microbitSerial.name'],
      description: 'name of the extension'
    });
  }

  /**
   * @return {string} - the ID of this extension.
   */
  static get EXTENSION_ID() {
    return EXTENSION_ID;
  }

  /**
   * URL to get this extension.
   * @type {string}
   */
  static get extensionURL() {
    return extensionURL;
  }

  /**
   * Set URL to get this extension.
   * The extensionURL will be changed to the URL of the loading server.
   * @param {string} url - URL
   */
  static set extensionURL(url) {
    extensionURL = url;
  }

  /**
   * Construct a set of blocks for micro:bit Serial.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  constructor(runtime) {
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;

    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
  }

  /**
   * @returns {object} metadata for this extension and its blocks.
   */
  getInfo() {
    setupTranslations();
    return {
      id: ExtensionBlocks.EXTENSION_ID,
      name: ExtensionBlocks.EXTENSION_NAME,
      extensionURL: ExtensionBlocks.extensionURL,
      blockIconURI: blockIcon,
      showStatusButton: false,
      blocks: [
        {
          opcode: 'connect',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'microbitSerial.connect',
            default: translations.en['microbitSerial.connect'],
            description: 'Conectar a la micro:bit'
          })
        },
        {
          opcode: 'disconnect',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'microbitSerial.disconnect',
            default: translations.en['microbitSerial.disconnect'],
            description: 'Desconectar de la micro:bit'
          })
        },
        {
          opcode: 'sendData',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'microbitSerial.sendData',
            default: translations.en['microbitSerial.sendData'],
            description: 'Enviar [DATA] a la micro:bit'
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
    sendData(Cast.toString(args.DATA));
  }
}

export {
  ExtensionBlocks as default,
  ExtensionBlocks as blockClass
};
