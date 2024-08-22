import { CHOICES } from '../constants/index.js';

/**
 * Obtiene el objeto de opción correspondiente a un valor de opción dado.
 *
 * @param {number} choiceValue - El valor de la opción a buscar.
 * @returns {Object|null} - El objeto de opción correspondiente al valor dado, o null si no se encuentra.
 */
export default function getCurrentChoice(choiceValue) {
	// Recorre las propiedades de CHOICES
    for (const key in CHOICES) {
        if (CHOICES[key].value === choiceValue) {
            return CHOICES[key]; // Devuelve el objeto si el valor coincide
        }
    }
    return null; // Devuelve null si no se encuentra el valor
}
