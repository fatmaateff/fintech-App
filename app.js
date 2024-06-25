//requires
const express = require('express');
const connectDB = require('./database');
const userRoute = require('./src/routes/userRoute');

//server initiallization
const app = express();
connectDB();

//require routes
app.use(express.json());

//use routes
app.use('/users', userRoute);

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});