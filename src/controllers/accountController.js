//1-requires
const account = require('../models/Account');
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const Account = require('../models/Account')

//2-CRUD for account
//2-1-get all accounts
const getAccounts = async(req,res) => {
    try {
        const accounts = await account.find();
        res.status(200).json(accounts);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-2 get account by id
const getAccountById = async(req,res) => {
    try {
        const account = await Account.findById(req.params.id);
        res.status(200).json(account);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-3 update account by id
const updateAccount = async(req,res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(account);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//2-4 delete account by id
const deleteAccount = async(req,res) => {
    try {
        const account = await Account.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'account deleted'});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-5 open an account
const openAccount = async (req, res) => {
    try {
        const user = await User.findById(req.body.userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        let account = await Account.findOne({userId: req.body.userId});

        if(!account) return res.status(404).json({message: 'User already has an account', data: null, error: null});

        account = new Account({ userId: user._id });
        await account.save();

        res.status(201).json(account);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//2-6 deposit money
const deposit = async(req,res) => {
    try {
        const account = await Account.findById(req.params.id);
        if(!account) return res.status(404).json({message: 'account not found', data: null, error: null});

        account.balance += Number.parseInt(req.body.amount);
        const transaction = await Transaction.create({
            type: 'deposit',
            amount: req.body.amount,
            accountId: account._id,
            status: "accepted"
        });
        await account.save();
        await transaction.save();
        res.status(201).json(transaction);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-7 withdraw money
const withdraw = async(req,res) => {
    try {
        const account = await Account.findById(req.params.id);
        if(!account) return res.status(404).json({message: 'account not found', data: null, error: null});
        
        const transaction = new Transaction({type: 'withdrawal', amount: req.body.amount, accountId: account._id, status: "rejected"});
        if(account.balance < Number.parseInt(req.body.amount)){
            await transaction.save();
            return res.status(400).json({error: 'insufficient balance'});
        }

        account.balance -= Number.parseInt(req.body.amount);
        transactiom.status = "accepted";
        await account.save();
        await transaction.save();
        res.status(201).json(transaction);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//2-8 check balance
const checkBalance = async(req,res) => {
    try {
        const account = await Account.findById(req.params.id);
        if(!account) return res.status(404).json({message: 'account not found', data: null, error: null});
        res.status(200).json({balance: account.balance})
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//export createAccount
module.exports = {
    getAccounts,
    getAccountById,
    updateAccount,
    deleteAccount,
    openAccount,
    deposit,
    withdraw,
    checkBalance
}
