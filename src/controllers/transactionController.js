//1-require models
const Transaction = require('../models/Transaction');

//2-CRUD for transaction
//2-1-create transaction
const createTransaction = async(req, res) => {
    try {
        const transaction = await Transaction.create(req.body);
        res.status(201).json(transaction);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//2-2-get all transactions
const getTransactions = async(req,res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-3 get transaction by id
const getTransactionById = async(req,res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        res.status(200).json(transaction);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-4 update transaction by id
const updateTransaction = async(req,res) => { 
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(transaction);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-5 delete transaction by id

const deleteTransaction = async(req,res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'transaction deleted'});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}   
