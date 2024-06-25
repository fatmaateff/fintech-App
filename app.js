console.log('Hello World');
const express = require('express');
const connectDB = require('./database');
const userRoute = require('./src/routes/userRoute');

const app = express();
connectDB();

//require routes
app.use(express.json());

//use routes
app.use('/users', userRoute);

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});