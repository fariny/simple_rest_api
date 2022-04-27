import {v4 as uuidv4} from 'uuid';

let users = [];

// get all users
export const getAllUsers = (req, res) => {
    res.send(users);
};

// create new user
export const createUser = (req, res) => {
    const user = req.body;
    const userWithId = {...user, id:uuidv4()};

    users.push(userWithId);
    res.send(`user with first name ${user.firstname} added to database!`);
};

// get user by id
// ./users/2 => req.params {id: 2}
export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

};

// delete user
export const deleteUser = (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`user with id: ${id} deleted from database`);
};

// update user
export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstname, lastname, age} = req.body;
    const user = users.find((user) => user.id === id);

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age; 

    res.send(`user with id: ${id} has been updated`);
};