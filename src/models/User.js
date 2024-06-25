//1-import mongoose
const mongoose = require('mongoose');

//2-make the schema and export it
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//3-create model from schema and export it
module.exports = mongoose.model('User', UserSchema);