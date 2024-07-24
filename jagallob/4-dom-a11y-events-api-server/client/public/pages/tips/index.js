import { getTipsInfo } from '../../services/index.js';

document.title = 'Sliding Puzzle | Tips';
const main = document.querySelector('main');

(async () => {
	const tipInfo = await getTipsInfo();

    // Crea el article de History
    const articleHistory = document.createElement('article');

    const h2History = document.createElement('h2');
    h2History.classList.add('heading');
    h2History.textContent = 'History';

    const section = document.createElement('section');
    const pHistory = document.createElement('p');
    pHistory.textContent = 'El Sliding Puzzle, conocido también como "Juego del 15" o "15 Puzzle", fue creado en la década de 1870. Su invención es atribuida a Noyes Chapman, un postmaster de Nueva York, aunque Sam Loyd, un conocido creador de rompecabezas, también reclamó su invención, popularizándolo aún más. Este juego consiste en un tablero de celdas numeradas desordenadas con una celda vacía, donde el objetivo es reorganizar los números deslizando las piezas hasta conseguir el orden correcto. Este juego no solo se ha mantenido popular a lo largo de los años debido a su simplicidad y desafío, sino también por su impacto en el desarrollo de algoritmos y técnicas de resolución de problemas en ciencias de la computación.';

    const img = document.createElement('img');
    img.src = 'https://media.istockphoto.com/id/175479741/photo/blank-slide-puzzle.jpg?s=612x612&w=0&k=20&c=7vSbGE5ykPk4RD8edu7uLrqqfqrZTXkuVC-o8dJ_H4s=';
    img.alt = 'Imagen de un Sliding Puzzle';

    section.append(pHistory, img);
    articleHistory.append(h2History, section);

    // Crea el article de Recomendations
    const articleRecomendations = document.createElement('article');
    const h2Recomendations = document.createElement('h2');
    h2Recomendations.classList.add('heading');
    h2Recomendations.textContent = 'Recomendations';
    const pRecomendations = document.createElement('p');
    pRecomendations.textContent = 'Para resolver un Sliding Puzzle de manera sencilla, debes observar el tablero y visualizar el objetivo final, generalmente un orden numérico ascendente.';

    const recomendationsList = document.createElement('ol');
    const steps = [
        'Comienza moviendo las piezas en el orden correcto, usualmente de arriba a abajo y de izquierda a derecha, asegurándote de colocar primero la fila superior y luego las columnas izquierdas en su posición correcta.', 'Utiliza la celda vacía para desplazar las piezas, tratando de mantener las ya posicionadas en su lugar.', 'Avanza resolviendo una fila o columna a la vez hasta que todas las piezas estén ordenadas.', 'En caso de trabarte, retrocede algunos movimientos e intenta una estrategia diferente para evitar ciclos repetitivos. Con práctica y paciencia, completarás el puzzle.',
    ];

    steps.forEach((step) => {
        const listItem = document.createElement('li');
        listItem.textContent = step;
        recomendationsList.append(listItem);
    });

    articleRecomendations.append(h2Recomendations, pRecomendations, recomendationsList);

    // Agrega los article´s al main
    main.append(articleHistory,articleRecomendations);

})();
