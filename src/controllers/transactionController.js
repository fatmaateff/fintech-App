//1-require models
const Transaction = require('../models/Transaction');
const Account = require('../models/Account');
//2-2-get all transactions
const getTransactions = async(req,res) => {
    try {
        const {accountId} = req.params;
        const exists = await Account.findById(accountId);

        if(!exists) return res.status(404).json({message: "Account with the given Id does not exist", errors: null, data: null});
        const transactions = await Transaction.find({accountId});
        res.status(200).json({message: "Successfully retreived all transactions", data: {transactions}, message: null});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//2-3 get transaction by id
const getTransactionById = async(req,res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction) return res.status(404).json({data: null, error: null, message: "Transaction with the following id does not exist"});
        res.status(200).json(transaction);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}


module.exports = {getTransactionById, getTransactions};
