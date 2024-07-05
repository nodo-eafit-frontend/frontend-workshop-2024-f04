import { CHOICES } from '../constants/index.js';

/**
 * Obtiene el objeto de opción correspondiente a un valor de opción dado.
 *
 * @param {number} choiceValue - El valor de la opción a buscar.
 * @returns {Object|null} - El objeto de opción correspondiente al valor dado, o null si no se encuentra.
 */
export default function getCurrentChoice(choiceValue) {

	for (const choice in CHOICES) {
        if (CHOICES[choice].value === choiceValue) {
            return CHOICES[choice];
        }
    }
    return null; // Si no se encuentra el valor, devolver null

}
