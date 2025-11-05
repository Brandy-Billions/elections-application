const express = require('express');
const router = express.Router();
const electionController = require('../controllers/electionController');

router.post('/api/elections', electionController.createElection);
router.get('/api/elections', electionController.getAllElection);

module.exports = router;