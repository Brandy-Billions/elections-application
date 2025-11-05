const students = require('../data/data');

let studentId = 1;

exports.createStudent = (req,res) => {
    const {name, email, matricNumber}= req.body;
    if(!name || !email || !matricNumber){
        return res.status(400).json({message:'name, email and matric number required'});
    };

    const exists = students.some(s => s.email === email || s.matricNumber === matricNumber);
    if (exists){
        return res.status(400).json({message:'Student with email or matric number already exists.'})
    }
    const newStudent = {id: studentId++, name, email, matricNumber};
    students.push(newStudent);
    res.json({message: 'Student registered successfully', student: newStudent});
};

exports.getAllStudents = (req, res) => {
    res.json(students);
};