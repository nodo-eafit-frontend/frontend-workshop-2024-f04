/**
 * Genera un mensaje mostrando las elecciones del jugador y de la computadora.
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
 * @returns {string} - Un mensaje que muestra las elecciones del jugador y de la computadora.
 */
export const getChoicesMessage = (playerChoice, computerChoice) => {
	return `player chose: ${playerChoice.text} ${playerChoice.emoji}\ncomputer chose: ${computerChoice.text} ${computerChoice.emoji}`;
};

/**
 * Genera un mensaje mostrando la puntuación y las vidas restantes.
 *
 * @param {Object} stats - Las estadísticas del juego.
 * @param {number} stats.score - La puntuación actual del jugador.
 * @param {number} stats.lifes - El número de vidas restantes del jugador.
 *
 * @returns {string} - Un mensaje que muestra la puntuación y las vidas restantes.
 */
export const getScoreMessage = (stats) => `Score: ${stats.score}🪙, Lifes: ${stats.lifes}💞`;
