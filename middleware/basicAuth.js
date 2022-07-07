const asyncHandler = require('express-async-handler');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserDb = require('./../db/user.db');

const protected = asyncHandler( async(req, res, next) => {
    let token;
    console.log(req.headers.authorization);
    console.log(req.headers.authorization.startsWith('Bearer'));
   try {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode.id);
            const user = UserDb.getUserData(decode.id,res);
            console.log(res.locals.userList);
            console.log("GET YSER ,,,,", user);
            console.log(user);
        }
        next();
        
    } catch (e) {
        console.log("u r not logged in ");
        res.status(400);
        res.json({ type : 'error', message : 'you are not authorized to access' });
    }

    if(!token){
        console.log("Token is missing ");
        res.status(400);        
        res.json({ type : 'error', message : 'you are not authorized to access' });
    }
    
});
module.exports = protected;