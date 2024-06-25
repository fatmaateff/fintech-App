//1-import mongoose
const mongoose = require('mongoose');

//2-create object from mongoose schema and define schema (amount,date,type,note,account)
const TransactionSchema = new mongoose.Schema({
    amount : {
        type : Number,
        required : true,
    },
    date : {
        type : Date,
        required : true,
        default : Date.now
    },
    type : {
        type : String,
        required : true,
        enum : ['deposit', 'withdrawal']
    },
    status : {
        type : String,
        required : true,
        enum : ['accepted', 'rejected']
    },    
    note : {
        type : String,
        required : false
    },
    accountId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Account',
        required : true
    }
});

//3-create model from schema and export it
module.exports = mongoose.model('Transaction', TransactionSchema);