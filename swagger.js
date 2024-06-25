const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title:'Fintech',
    description: 'Description'
  },
  host: `localhost:${process.env.PORT || 4000}`,
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/userRoute.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);