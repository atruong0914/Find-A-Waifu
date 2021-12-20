const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const db = require('./db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/api', routes);

app.use('/gift', routes);


app.listen(PORT, () => console.log(`FAW APP Listening on port: ${PORT}`));