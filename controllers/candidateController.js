const {candidates, elections} = require('../data/data');
let candidateId = 1;

exports.createCandidate = (req,res) => {
    const{name, department, electionId} = req.body;
    if(!name, !department, !electionId)  {
        return res.status(400).json({message: 'Enter Name and department'});
    };
    
    const electionExist = elections.some(e => e.id === Number(electionId))
    if (!electionExist) {
        res.status(400).json({message:'Election not found'});
    };

    const newCandidate = {id:candidateId++, name, department, electionId: Number(electionId)};
    candidates.push(newCandidate);
    return res.status(200).status({message:'Candidate successfully added'});
};

exports.getAllCandidates = (req, res) => {
    return res.json(candidates);
};

exports.getAllCandidatesByElectionId = (req, res) => {
    const id = Number(req.params.electionId);
    const list = candidates.filter(c => c.electionId === id );
    res.json(list);
}

exports.deleteCandidate = (req, res) => {
    const candidate = candidates.filter((candidate) => candidate.id !== req.params.id)
    res.json(candidate)
}