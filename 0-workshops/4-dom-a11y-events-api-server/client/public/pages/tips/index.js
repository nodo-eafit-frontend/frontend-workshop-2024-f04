import { getTipsInfo } from '../../services/index.js';

document.title = 'Sliding Puzzel | Tips';

(async () => {
	const tipInfo = await getTipsInfo();

	const titleElement = document.querySelector('.heading');
	titleElement.textContent = tipInfo.title;

	const descriptionElement = document.querySelector('p');
	descriptionElement.textContent = tipInfo.description;

	const imageElement = document.querySelector('img');
	imageElement.src = tipInfo.image;

  // Agregar más elementos según sea necesario
})();