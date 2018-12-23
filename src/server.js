'use strict';

const express   = require('express');
const path      = require('path');
const bodyParser = require('body-parser');
const chalk     = require('chalk');
const api = require('./modules/api');

const app       = express();
const DOCS_PATH = '../build/';
const PORT      = 8082;
const IP_ADRESS = 'localhost';

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(api);
app.use(express.static(path.join(__dirname, DOCS_PATH)));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html')));

/* eslint-disable no-console */
app.listen(
  PORT,
  IP_ADRESS,
  () => console.log(`
    =====================================================
    -> Server (${chalk.bgBlue('SPA')}) 🏃 (running) on ${chalk.green(IP_ADRESS)}:${chalk.green(PORT)}
    =====================================================
  `)
);