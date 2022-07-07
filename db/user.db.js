
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const Schema = mongoose.Schema;
const userSchema = new Schema({
    id : { type: String, required : true },
    username : { type: String, required : true },
    firstName : { type: String, required : true },
    lastName : { type: String, required : true },
    email : { type: String, required : true },
    password: { type: String, required : true },
    created : { type: Date, required : false },
    token : { type: String, required : true },
}, { timestamp : true});

const UserModel = mongoose.model("User", userSchema);

const listUsers = [];

 const saveUser = (userData, req, res ) => {
    console.log('save user called.')
        
    if( getUserData(userData.username).length === 0 ) {
        listUsers.push(userData);
        res.locals.userList =  listUsers;
        console.log(" -------------------- locals ---------------------------------- ");
        console.log(res.locals.userList);
        return userData;
    } else {
        console.log(" -------------------- locals ---------------------------------- ");
        console.log(res.locals.userList);
        return "user Already Exisits";
    }
    
};

const getUserData = (username, res ) => {
    if( listUsers.length == 0){
        return [];
    }

    const userInfo = listUsers.filter((user) =>{
        return user.username === username;
    });

    return  userInfo;
}

module.exports = { saveUser, getUserData, UserModel};