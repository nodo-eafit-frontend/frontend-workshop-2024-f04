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
    let result;

    if (playerChoice.value === computerChoice.value) {
        result = 0; // Empate
    } else if (
        (playerChoice.value === CHOICES.rock.value && computerChoice.value === CHOICES.scissors.value) ||
        (playerChoice.value === CHOICES.paper.value && computerChoice.value === CHOICES.rock.value) ||
        (playerChoice.value === CHOICES.scissors.value && computerChoice.value === CHOICES.paper.value)
    ) {
        result = 1; // Jugador gana
    } else {
        result = 2; // Computadora gana
    }

    return result;
}