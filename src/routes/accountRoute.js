const express = require('express');
const router = express.Router();
const {
    openAccount,
    getAccounts,
    getAccountById,
    updateAccount,
    deleteAccount,
    deposit,
    withdraw,
    checkBalance
} = require('../controllers/accountController');

// Routes for CRUD operations on accounts
router.route('/account')
    .post(createAccountValidation,validator,openAccount)  // POST /api/account - Create a new account
    .get(getAccounts);  // GET /api/account - Get all accounts

router.route('/account/:id').all(getAccountByIdValidation,validator)
    .get(getAccountById)   // GET /api/account/:id - Get account by ID
    .put(updateAccountValidation, validator, updateAccount)    // PUT /api/account/:id - Update account by ID
    .delete(deleteAccount); // DELETE /api/account/:id - Delete account by ID

// Routes for deposit and withdraw operations
router.post('/account/deposit/:id',transactionValidation,validator, deposit);   // POST /api/account/deposit/:id - Deposit funds into account
router.post('/account/withdraw/:id',transactionValidation,validator, withdraw); // POST /api/account/withdraw/:id - Withdraw funds from account

// Route to check balance
router.get('/account/balance/:id', checkBalance); // GET /api/account/balance/:id - Check account balance

module.exports = router;
