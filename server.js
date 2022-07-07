 const express = require("express");
 const dotenv = require('dotenv');
 const routes = require('./routes/main-routes');
 const protected  = require('./middleware/basicAuth')
 dotenv.config();
 
 const app = new express();
 const port = process.env.PORT || 3000;
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));

 const runServer = () => {
    app.use(["/user/me"], protected);
    app.get('/status', (req, res) => {
        res.contentType('application/json');
        res.json({type : 'success', message : ' server is running'})
    })
    app.listen(port, () => {
        console.log(' server Started ... ');
    });

    app.use(routes);    
    app.all('*', function(req, res){
        res.status(400);
        res.json({type : 'error', message: "Route not found"});
      });

     
 }

 
 module.exports = runServer();