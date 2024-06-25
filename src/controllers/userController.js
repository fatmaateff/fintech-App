//1-require model user
const User = require('../models/User');


//2-CRUD ON USER
//2-1-create user
const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//2-2-get all users
const getUsers = async(req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-3 get user by id
const getUserById = async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-4 update user by id
const updateUser = async(req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//2-5 delete user by id
const deleteUser = async(req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'user deleted'});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//export createUser
module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}
