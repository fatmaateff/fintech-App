const {body , param} = require('express-validator');


const getAccountByIdValidation = [
    param('id').notEmpty().withMessage('Id is required')
];

const AccountValidation = [
    body('balance').notEmpty().withMessage('Balance is required').isNumeric().withMessage('Balance must be a number'),
    body('userId').notEmpty().withMessage('User Id is required').isMongoId().withMessage('User Id is not valid')
];

const transactionValidation = [
    body('amount').notEmpty().withMessage('Amount is required').isNumeric().withMessage('Amount must be a number').isFloat({min: 1}).withMessage('Amount must be greater than or equal to 1 pound')
];

const checkBalanceValidation = [
    param('id').notEmpty().withMessage('Id is required')
];



module.exports = {

    getAccountByIdValidation,
    transactionValidation,
    AccountValidation
}