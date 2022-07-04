const express = require('express');
const routes = express.Router();
const userRoutes = require('./user-routes');

routes.post('/user/login', userRoutes.login);
routes.post('/user/signup', userRoutes.signUp);
routes.get('/user/login', userRoutes.login);

module.exports = routes;