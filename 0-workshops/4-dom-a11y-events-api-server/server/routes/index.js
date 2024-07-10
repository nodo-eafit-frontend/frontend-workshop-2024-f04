const express = require('express');
const { getStats, postStats } = require('../apis/stats');
const { getGameInfo } = require('../apis/gameInfo');
// const { getTipsInfo } = require('') // TODO: completar

const router = express.Router();

router.get('/game-info', getGameInfo);

router.get('/stats', getStats);
router.post('/stats', postStats);

// router.get(); // TODO: Agregar API con su respectivo método

module.exports = router;
