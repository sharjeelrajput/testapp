const express = require('express');
const routes = express.Router();
const userRoutes = require('./user-routes');
const protected  = require('./../middleware/basicAuth')

// routes.all("*", (req, res) => {
//     res.status(404);
//     res.json({ type : 'error', message : 'route does not exist' });
// })
routes.post('/user/login', userRoutes.login);
routes.post('/user/register', userRoutes.register);
routes.get('/user/me', userRoutes.getMe);

module.exports = routes;
