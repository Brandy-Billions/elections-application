const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.post('/api/candidates', candidateController.createCandidate);
router.get('/api/candidates', candidateController.getAllCandidates);
router.get('/api/candidates/:electionId', candidateController.getAllCandidatesByElectionId);
router.delete('/api/candidate/:id', candidateController.deleteCandidate)
module.exports = router;