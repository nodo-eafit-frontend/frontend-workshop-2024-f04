const express = require('express');
const { getStats, postStats } = require('../apis/stats');
const { getGameInfo } = require('../apis/gameInfo');
const { getTipsInfo } = require('../apis/tipInfo')

const router = express.Router();

router.get('/game-info', getGameInfo);

router.get('/stats', getStats);
router.post('/stats', postStats);

router.get('/tips-info', getTipsInfo); 

module.exports = router;
