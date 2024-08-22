import { CHOICES } from '../constants/index.js';

/**
 * Determina el ganador del juego de Piedra, Papel o Tijera.
 *
 * @param {Object} playerChoice - La elección del jugador.
 * @param {string} playerChoice.text - El texto de la elección del jugador (e.g., "Rock").
 * @param {string} playerChoice.emoji - El emoji de la elección del jugador.
 * @param {number} playerChoice.value - El valor de la elección del jugador (e.g., 0 para Rock).
 *
 * @param {Object} computerChoice - La elección de la computadora.
 * @param {string} computerChoice.text - El texto de la elección de la computadora (e.g., "Rock").
 * @param {string} computerChoice.emoji - El emoji de la elección de la computadora.
 * @param {number} computerChoice.value - El valor de la elección de la computadora (e.g., 0 para Rock).
 *
 * @returns {number} - Devuelve 0 si es empate, 1 si el jugador gana, 2 si la computadora gana.
 */
export default function determineWinner(playerChoice, computerChoice) {
    if (playerChoice.value === computerChoice.value) {
        return 0; // Empate
    }

    // Piedra (0) gana contra Tijera (2)
    // Tijera (2) gana contra Papel (1)
    // Papel (1) gana contra Piedra (0)
    if (
        (playerChoice.value === 0 && computerChoice.value === 2) ||
        (playerChoice.value === 1 && computerChoice.value === 0) ||
        (playerChoice.value === 2 && computerChoice.value === 1)
    ) {
        return 1; // El jugador gana
    } else {
        return 2; // La computadora gana
    }
}

