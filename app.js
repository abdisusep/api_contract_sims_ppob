require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app  = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./routes');
app.use('/', routes);

app.get('/', function (req, res) {
    res.send('PPOB API');
});

app.listen(port, () => {
    console.log(`running on port: ${port}`);
})