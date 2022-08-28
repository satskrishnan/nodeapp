// Express App Setup
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers
app.get('/', (req, res) => {
  res.status(200).send({ text: 'Welcome To This Basic Node.js Application!' });
});

app.get('/test', (req, res) => {
  res.status(200).send({ text: 'Simple Node App Working!' });
});

module.exports = app;
