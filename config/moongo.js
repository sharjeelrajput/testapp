const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Mongo db connection string
console.log(process.env.mongodb, process.env.mongopassword);

let mongoDBUri = "mongodb+srv://"+process.env.mongodb+":"+process.env.mongopassword+"@cluster0.mvon2.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDBUri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then((result)=>{
        console.log(" connect to db..");
    }).catch((err)=>{
        console.log(err);
    });

module.exports = mongoose;