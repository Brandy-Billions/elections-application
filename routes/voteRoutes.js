const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');

router.post('/api/votes', voteController.createVote);
router.get('/api/results/:electionId', voteController.getResultsByElection);
module.exports = router;