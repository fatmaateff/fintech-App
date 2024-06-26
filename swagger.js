const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title:'Fintech',
    description: 'Description'
  },
  // 9000 for docker, 4000 for local
  host: `localhost:${9000}`,
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/userRoute.js','./src/routes/accountRoute.js', './src/routes/transactionRoute.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);