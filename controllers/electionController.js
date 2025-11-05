const elections = require('../data/data');

let electionId = 1;

exports.createElection = (req, res) => {
    const {title, description} = req.body;
    if (!title){
        return res.status(400).json({message:'Title is required'});
    };
    const newElection = {id: electionId++, title, description: description || ''};
    elections.push(newElection);
    res.status(201).json({message: 'Election successful', election: newElection});
};

exports.getAllElection = (req, res) => {
    res.json(elections);
};
