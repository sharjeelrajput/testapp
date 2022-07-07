
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

module.exports = { saveUser, getUserData}