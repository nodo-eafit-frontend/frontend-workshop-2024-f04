import { CHOICES } from '../constants/index.js';

/**
 * Obtiene el objeto de opción correspondiente a un valor de opción dado.
 *
 * @param {number} choiceValue - El valor de la opción a buscar.
 * @returns {Object|null} - El objeto de opción correspondiente al valor dado, o null si no se encuentra.
 */
export default function getCurrentChoice(choiceValue) {
	for (const choiceKey in CHOICES) {
        if (CHOICES[choiceKey].value === choiceValue) {
            return CHOICES[choiceKey];
        }
    }
    return null; // Si no se encuentra una opción correspondiente
}
