const {body, param} = require('express-validator');

const createUserValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
];

const updateUserValidation = [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('email').optional().notEmpty().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
    body('password').optional().notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
];

const getUserByIdValidation = [
    param('id').notEmpty().withMessage('Id is required')
];

module.exports = {
    createUserValidation,
    updateUserValidation,
    getUserByIdValidation
}
