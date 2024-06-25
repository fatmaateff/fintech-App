const {body , param} = require('express-validator');

const createAccountValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
];

const updateAccountValidation = [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('email').optional().notEmpty().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
    body('password').optional().notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
];

const getAccountByIdValidation = [
    param('id').notEmpty().withMessage('Id is required')
];

const openAccountValidation = [
    body('balance').notEmpty().withMessage('Balance is required').isNumeric().withMessage('Balance must be a number')
];

const transactionValidation = [
    body('amount').notEmpty().withMessage('Amount is required').isNumeric().withMessage('Amount must be a number').isFloat({min: 1}).withMessage('Amount must be greater than or equal to 1 pound')
];

const checkBalanceValidation = [
    param('id').notEmpty().withMessage('Id is required')
];



module.exports = {
    createAccountValidation,
    updateAccountValidation,
    getAccountByIdValidation
}