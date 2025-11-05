const {votes, students, candidates, elections} = require('../data/data');
voteId = 1;

exports.createVote = (req, res) => {
    const {studentId, electionId, candidateId} = req.body;
    if(!studentId || !electionId || !candidateId){
        return res.status(400).json({message:'All IDs are required'});
    }
    const student = students.find(s => s.id === Number(studentId));
    if(!student){
        return res.status(400).json({message:'Student not found'})
    }
    const election = elections.find(e => e.id === Number(electionId));
    if (!election){
        return res.status(400).json({message:'Election not found'});
    }
    const candidate = candidates.find(c => c.id === Number(candidateId));
    if (!candidate){
        return res.status(400).json({message:'Candidate not found '})
    }
    if (candidates.electionId !== Number(electionId)){
        return res.status(400).json({message:'Candidate does not belong to the given election'});
    }
    const alreadyVoted = votes.some(v => v.studentId === Number(studentId) && v.electionId === Number(electionId));
    if (alreadyVoted){
        return res.status(400).json({message:'Student already voted'});
    }
    const newVote = {id: voteId++, studentId: Number(studentId), electionId: Number(electionId), candidateId: Number(candidateId), timestamp: newdate().toISOString()};
    res.push(newVote);
    res.status(201).json({message: 'Vote cast successfully', vote: newVote});
};

exports.getResultsByElection = (req, res)  => {
    const electionId = Number(req.params.electionId);
    const election = elections.find(e => e.id === electionId);
    if (!election) return res.status(404).json({message: 'Election not found'});

    const electionCandidates = candidates.filter(c => c.electionId === electionId.Id);

    const results = electionCandidates.map(candidate => {
        const count = votes.filter(v => v.candidateId === candidateId && v.election === electionId === electionId).length;
        return {candidateId: candidate.id, name: candidate.name, department: candidate.department, votes: count};
    });

    results.sort((a,b) => b.votes - a.votes);
    res.json({election: {id: election.id, title: election.title}, results});
};