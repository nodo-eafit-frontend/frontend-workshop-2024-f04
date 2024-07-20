// Definimos los option para las opciones
export const CHOICES = {
  rock: {
    text: "Rock",
    emoji: "✊",
    value: 0,
  },
  paper: {
    text: "Paper",
    emoji: "✋",
    value: 1,
  },
  scissors: {
    text: "Scissors",
    emoji: "✌️",
    value: 2,
  },
};

//Mensajes para el usurario
export const MESSAGES = {
  question: "Choose your option",
  results: ["It's a tie! 🤝", "You win! 🥳", "Computer wins! 🤖"],
  gameOver: "Game over! 🎮",
};

//Estadisticas
export const stats = {
  attempts: 0,
  byDraw: 1,
  byWin: 3,
  lifes: 3,
  score: 0,
};
