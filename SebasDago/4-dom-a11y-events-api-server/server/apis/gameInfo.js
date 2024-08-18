require('dotenv').config();
const { readJsonFile } = require('../utils/json-reader');
// const gameInfoJSON = require('../data/game-info.json');

const getGameInfo = async (request, response) => {
	try {
		const gameInfoJSON = await readJsonFile(process.env.JSON_DIR_GAME_INFO);
		response.status(200).send(gameInfoJSON);
	} catch (error) {
		response.status(400);
	}
};

module.exports = {
	getGameInfo,
};
