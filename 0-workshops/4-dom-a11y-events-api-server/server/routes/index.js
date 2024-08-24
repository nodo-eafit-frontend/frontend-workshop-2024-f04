/server/routes/index.js

const express = require('express');
const { getStats, postStats } = require('../apis/stats');
const { getGameInfo } = require('../apis/gameInfo');
const { getTipsInfo } = require('../apis/tipsInfo'); // Importar la función getTipsInfo

const router = express.Router();

router.get('/game-info', getGameInfo);

router.get('/stats', getStats);
router.post('/stats', postStats);

router.get('/tips-info', getTipsInfo); // Agregar la ruta para la API GET /tips-info

module.exports = router;