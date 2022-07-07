import * as Express from 'express';

export interface UserData {
    username? : string;
    password? : string;
    first_name? : string;
    last_name? : string;
    email? : string;
    passwordHash? : string;
    passwordSalt? : string;
}

const listUsers : UserData[] = [];

export const saveUser = (userData: UserData, res : Express.Response) : UserData => {
    console.log('save user called.')
    // listUsers.push(userData);
    // res.locals.userList =  listUsers;
    return userData;
};

export const getUserData = (username: string, res : Express.Response) : UserData[] => {
    console.log('GET USER DATA ................');
    console.log(listUsers.length, res.locals.userList.length);
    if( res.locals.userList.length == 0 ){
        return [];
    }

    const userInfo = res.locals.userList.filter((user : UserData) =>{
        return user.username === username;
    });

    return  userInfo;
}