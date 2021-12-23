const express = require('express');

const localizacao = require('./user');

const connection = require('./database');

const routes = express.Router();

routes.get('/usuarios', localizacao.create);

module.exports = routes;