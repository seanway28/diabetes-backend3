const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// Add validation middleware functions here
// ...


const indexRouter = require('./routes/index');
// const authRouter = require('./routes/auth-router');

const server = express();

server.use(logger('dev'));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
// server.use('/auth', authRouter);

module.exports = server;