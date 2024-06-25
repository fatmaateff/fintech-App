//1-import mongoose
const mongoose = require('mongoose');

//2-create object from mongoose schema and define schema
const AccountSchema = new mongoose.Schema({
    balance : {
        type : Number,
        required : true,
        default : 0
    },
    userId : {
        type :mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
        }
});
//3-create model from schema and export it
module.exports = mongoose.model('Account', AccountSchema);