export * from './modal.js';
export * from './board-game.js';
export * from './board-info.js';

// client/public/utils/index.js

export function sanitizeData(data) {
    const sanitizedData = {};

    // Sanitizar boardSize
    sanitizedData.boardSize = parseInt(data.boardSize, 10);
    if (isNaN(sanitizedData.boardSize) || sanitizedData.boardSize < 3 || sanitizedData.boardSize > 10) {
    throw new Error('Invalid board size');
    }

    // Sanitizar difficulty
    sanitizedData.difficulty = data.difficulty.trim();
        if (!['easy', 'medium', 'hard'].includes(sanitizedData.difficulty)) {
    throw new Error('Invalid difficulty level');
    }

    // Sanitizar nickname
    sanitizedData.nickname = data.nickname.trim();
    if (sanitizedData.nickname.length < 3 || sanitizedData.nickname.length > 20) {
        throw new Error('Invalid nickname');
    }

    // Sanitizar withImage
    sanitizedData.withImage = data.withImage === 'true';

    // Sanitizar withTime
    sanitizedData.withTime = data.withTime === 'true';

    return sanitizedData;
}

// client/public/utils/index.js

export function addEventToSwapByEmptyNeigbor(eventClickProps, onClick) {
    const { chips, emptyNode, boardSize } = eventClickProps;
  
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const chipIndex = Array.prototype.indexOf.call(chips, chip);
        const emptyIndex = Array.prototype.indexOf.call(chips, emptyNode);
  
        // Verificar si la pieza está en una posición adyacente a la pieza vacía
        if (
          (Math.abs(chipIndex - emptyIndex) === 1 && Math.floor(chipIndex / boardSize) === Math.floor(emptyIndex / boardSize)) ||
          (Math.abs(chipIndex - emptyIndex) === boardSize)
        ) {
          // Intercambiar las piezas
          const temp = chip.innerHTML;
          chip.innerHTML = emptyNode.innerHTML;
          emptyNode.innerHTML = temp;
  
          // Llamar a la función onClick
          onClick();
        }
      });
    });
  }