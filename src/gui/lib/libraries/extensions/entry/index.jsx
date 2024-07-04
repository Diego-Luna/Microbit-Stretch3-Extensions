/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.png';
import translations from './translations.json';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const entry = {
    get name () {
        return formatMessage({
            id: 'microbitSerial.entry.name',
            default: translations.en['microbitSerial.entry.name'],
            description: 'name of the extension'
        });
    },
    extensionId: 'microbitSerial',
    extensionURL: 'https://github.com/Diego-Luna/Microbit-Stretch3-Extensions/dist/microbitSerial.mjs',
    collaborator: 'tuNombre',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: translations.en['microbitSerial.entry.description'],
            description: 'Description for this extension',
            id: 'microbitSerial.entry.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://tu-url-de-ayuda/',  // Cambia esto a la URL correcta de tu página de ayuda
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
