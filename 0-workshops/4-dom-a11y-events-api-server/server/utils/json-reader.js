const fs = require('fs').promises;
const path = require('path');

/**
 * Lee el contenido de un archivo JSON.
 * @param {string} filePath - La ruta al archivo JSON.
 * @returns {Promise<Object>} - Una promesa que se resuelve con el contenido del archivo JSON.
 */
async function readJsonFile(filePath) {
	try {
		const absolutePath = path.resolve(filePath);
		const data = await fs.readFile(absolutePath, 'utf-8');
		return JSON.parse(data);
	} catch (error) {
		console.error(`Error leyendo el archivo ${filePath}:`, error);
		throw error;
	}
}

/**
 * Actualiza el contenido de un archivo JSON.
 * @param {string} filePath - La ruta al archivo JSON.
 * @param {Object} newData - El nuevo contenido a escribir en el archivo JSON.
 * @returns {Promise<void>} - Una promesa que se resuelve cuando el archivo ha sido actualizado.
 */
async function updateJsonFile(filePath, newData) {
	try {
		const absolutePath = path.resolve(filePath);
		const jsonString = JSON.stringify(newData, null, 2); // Formatea con 2 espacios de sangría
		await fs.writeFile(absolutePath, jsonString, 'utf-8');
		console.log(`Archivo ${filePath} actualizado con éxito.`);
	} catch (error) {
		console.error(`Error actualizando el archivo ${filePath}:`, error);
		throw error;
	}
}

module.exports = {
	readJsonFile,
	updateJsonFile,
};
