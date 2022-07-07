const app = require('express');
const userController = require('./../controllers/UserController');

/**
 * @desc Authenticate User
 * @access PUBLIC
 * @route /app/user/login
 * @param {userName, password, email, firstName, lastName} req 
 * @param {*} res 
 */
const login = userController.login;
const register = userController.register;
const getMe = userController.getMe;
module.exports = { login, register, getMe };