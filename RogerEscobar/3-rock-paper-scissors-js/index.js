// Importamos el módulo 'prompts' para obtener entradas del usuario
import prompts from "prompts";

// Importamos funciones y variables
import { CHOICES, MESSAGES, stats } from "./constants/index.js";
import getCurrentChoice from "./functions/get-current-choice.js";
import determineWinner from "./functions/determine-winner.js";
import getComputerChoice from "./functions/get-computer-choice.js";
import { getChoicesMessage, getScoreMessage } from "./functions/messages.js";

/**
 * Inicia el juego de Piedra, Papel o Tijera.
 *
 * Esta función utiliza el módulo 'prompts' para interactuar con el usuario,
 * obtiene las elecciones del jugador y la computadora, y luego determina
 * y anuncia el ganador.
 *
 * @async
 * @function playGame
 *
 * @returns {Promise<void>} No retorna ningún valor, solo imprime los resultados del juego en la consola.
 */
const playGame = async (playerName) => {
  // Preguntar por la opción
  const response = await prompts({
    type: "select",
    name: "playerChoiceValue",
    message: MESSAGES.question,
    choices: [
      {
        title: `${CHOICES.rock.text} ${CHOICES.rock.emoji}`,
        value: CHOICES.rock.value,
      },
      {
        title: `${CHOICES.paper.text} ${CHOICES.paper.emoji}`,
        value: CHOICES.paper.value,
      },
      {
        title: `${CHOICES.scissors.text} ${CHOICES.scissors.emoji}`,
        value: CHOICES.scissors.value,
      },
    ],
  });

  // Obtener elección del jugador y del computador
  const playerChoiceValue = response.playerChoiceValue;
  const computerChoiceValue = getComputerChoice();

  // Obtener opciones elegidas a partir de los valores
  const playerChoice = getCurrentChoice(playerChoiceValue);
  const computerChoice = getCurrentChoice(computerChoiceValue);

  console.log("\x1Bc"); // Limpiar pantalla

  // Anunciar opciones elejidas
  const choicesMessage = getChoicesMessage(
    playerName,
    playerChoice,
    computerChoice
  );
  console.log(choicesMessage);

  const result = determineWinner(playerChoice, computerChoice);

  return result;
};

/**
 * Jugar el juego en ciclos hasta que el jugador pierda todas la vidas
 */
async function runGame() {
  // Pedir al usuario que ingrese su nombre
  const { playerName } = await prompts({
    type: "text",
    name: "playerName",
    message: "Enter your name:",
  });

  // Mensaje de bienvenida al jugador
  console.log(`Welcome, ${playerName}! Let's play Rock, Paper, Scissors!\n`);

  while (stats.lifes > 0) {
    const scoreMessage = getScoreMessage(stats);
    console.log(scoreMessage, "\n");
    const result = await playGame(playerName);

    console.log("\t", MESSAGES.results[result], "\n"); // Anunciar Ganador

    if (result === 0) {
      stats.score += stats.byDraw;
    } else if (result === 1) {
      stats.score += stats.byWin;
    } else {
      stats.lifes--;
    }
  }

  const scoreMessage = getScoreMessage(stats);
  console.log(scoreMessage, "\n");
  console.log("\t", MESSAGES.gameOver);

  stats.attemps++;
}

// Start the game
runGame();
