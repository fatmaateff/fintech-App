//requires
require('dotenv').config();
const express = require('express');
const connectDB = require('./database');
const userRoute = require('./src/routes/userRoute');
const accountRoute = require('./src/routes/accountRoute');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const transactionRoute = require('./src/routes/transactionRoute');
//server initiallization
const app = express();
connectDB();


//require routes
app.use(express.json());

app.use("/api-docs",
    swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//use routes
app.use('/users', userRoute);
app.use('/accounts', accountRoute);
app.use('/transactions', transactionRoute)

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});