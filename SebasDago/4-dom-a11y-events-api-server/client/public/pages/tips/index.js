import { getTipsInfo } from '../../services/index.js';

document.title = 'Sliding Puzzel | Tips';

(async () => {
	const tipInfo = await getTipsInfo();

	// TODO: Agregar información correspondiente del título, descripción e imagen, con respectivas clases
})();
