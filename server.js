 const express = require("express");
 const dotenv = require('dotenv');

 dotenv.config();
 
 const app = new express();
 const port = process.env.PORT || 3000;

 const runServer = () => {
    app.get('/status', (req, res) => {
        res.contentType('application/json');
        res.json({type : 'success', message : ' server is running'})
    })
    app.listen(port, () => {
        console.log(' server Started ... ', process.env);
    });
 }

 module.exports = runServer();