const asyncHandler = require('express-async-handler');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserDb = require('./../db/user.db');
const { UserModel } = require('./../db/user.db');
const { JsonWebTokenError } = require('jsonwebtoken');

const login = asyncHandler( async(req, res) => {

    res.json({type : ' success', message : 'login called.'});
});

const getMe = asyncHandler( async(req, res) => { 
    if(!req.body){
        res.json({ type : 'error', message : 'invalid data'})
    }
    const {username} = req.body;
    if(!username){
        res.json({ type : 'error', message : 'invalid data'})
    }
    const userMsg = UserDb.getUserData(req.body.username, req, res);        
    res.json({type : ' success', message : userMsg});
})

const register = asyncHandler( async(req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);   
   if( !req.body){
    res.status(400);
    return res.json({ type : 'error', message : 'invalid data'})
   }

   const { username, email, password, firstName, lastName} = req.body;
    if( !username || !email || !password || !firstName || !lastName ){
        res.status(400);
        res.json({ type : 'error', message : 'invalid data'})
    }
    const saltPwd = await bcrypt.genSalt(10);    
    const pwdHashed = await bcrypt.hash(password, saltPwd);    
    const userData = {
        username : username,
        password : pwdHashed,
        first_name : firstName,
        last_name : lastName,
        email : email,
        token  : generateToken(username)
    }

    const userSave = new UserModel({
        id: new Date().getMilliseconds+"",
        username : username,
        password : pwdHashed,
        firstName : firstName,
        lastName : lastName,
        email : email,
        token  : generateToken(username)
    });

    userSave.save().then((result) => {
        const userMsg = UserDb.saveUser(userData, req, res);
        res.json({type : ' success', message : userMsg});
    }).catch(err => {
        console.log(err);
        res.json({type : ' error', message : err});
    });    
})


const generateToken  = (id) => {
    console.log(id, process.env.JWT_SECRET);
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '30d'
    });
}
module.exports = { 
    login,
    register,
    getMe
}