const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res) => res.status(200).send("hello, noodle..."));

server.use('/api', require('./routes'));

module.exports = server;