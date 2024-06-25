const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //localhost instead of host.docker.internal
        await mongoose.connect('mongodb://host.docker.internal:27017/fintech')
        console.log('MongoDB connected')
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;