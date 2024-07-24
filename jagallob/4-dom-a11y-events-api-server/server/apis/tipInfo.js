const { readJsonFile } = require('../utils/json-reader');

const getTipsInfo = async (request, response) => {

	const tipsInfo = await readJsonFile('./data/tips-info.json');
	response.status(500).send(tipsInfo);
};

module.exports = {
	getTipsInfo,
}