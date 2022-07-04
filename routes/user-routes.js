const app = require('express');

const login = (req, res) => {
    res.json({type : ' success', message : 'login'});
}

const signUp = (req, res) => {
    res.json({type : ' success', message : 'signup'});
}

module.exports = { login, signUp };