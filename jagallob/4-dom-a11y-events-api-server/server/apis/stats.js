require('dotenv').config();
const { readJsonFile, updateJsonFile } = require('../utils/json-reader');

const getStats = async (req, res) => {
	try {
		const ranking = await readJsonFile(process.env.JSON_DIR_STATS);
		response.status(200).send(ranking);
	} catch (error) {
		response.status(400);
	}
};

const postStats = async (request, response) => {
	try {
		const { body } = request;
		const stats = await readJsonFile(process.env.JSON_DIR_STATS);
		stats.push(body);

		updateJsonFile(process.env.JSON_DIR_STATS, stats);

		response.sendStatus(200);
	} catch (error) {
		response.sendStatus(400);
	}
};

module.exports = {
	getStats,
	postStats,
};
