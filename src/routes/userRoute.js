//1-require express
const express = require('express');
const router = express.Router();
const {createUser, getUsers, getUserById,updateUser,deleteUser} = require('../controllers/userController');


//4-router for user
router.route('/user')
.post(createUser)
.get(getUsers);

router.route('/user/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);


//5-export router
module.exports = router;