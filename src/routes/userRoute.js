//1-require express
const express = require('express');
const router = express.Router();
const {createUser, getUsers, getUserById,updateUser,deleteUser} = require('../controllers/userController');
const {createUserValidation, getUserByIdValidation,updateUserValidation } = require('../middlewares/validations/userValidation');
const validator = require ('../middlewares/validations/validator');


//4-router for user
router.route('/user')
.post(createUserValidation,validator, createUser)
.get(getUsers);

router.route('/user/:id').all(getUserByIdValidation,validator)
.get(getUserById)
.put(updateUserValidation,validator,updateUser)
.delete(deleteUser);


//5-export router
module.exports = router;