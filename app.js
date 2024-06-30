//requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const userRoute = require('./src/routes/userRoute');
const accountRoute = require('./src/routes/accountRoute');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const transactionRoute = require('./src/routes/transactionRoute');
//server initiallization
const app = express();

connectDB();

// listening to the server

const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// end listening to the server

app.use(cors());
app.use(express.json());
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//use routes
app.use('/users', userRoute);
app.use('/accounts', accountRoute);
app.use('/transactions', transactionRoute)

//Not Found Middleware
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
//end Not Found Middleware

//Error Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});
//end Error Middleware
