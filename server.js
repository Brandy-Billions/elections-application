const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const electionRoutes = require('./routes/electionRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const voteRoutes = require('./routes/voteRoutes');

app.use(express.json());
app.use('/api/students', studentRoutes);
app.use('/api/elections', electionRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/votes', voteRoutes);

const PORT = 8000;

app.get('/', (req, res) => res.send('University Election API running...'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));