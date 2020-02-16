
// 1- Storing the EXPRESS Application
const express = require('express');

// 2- Set up GRAPHQL to work with EXPRESS Application
// express-graphql module allows express to understand graphql - Create express server using API
const graphqlHTTP = require('express-graphql'); // convention for graphql.

const schema = require('./schema/schema');  // Integrating the schema into the express app

// We store it into a constant called app
const app = express();
// The usage of the middleware
app.use('/graphql', graphqlHTTP({ 
  schema, // ---- > The Schema is integrated.
  graphiql: true
})); // the express app cannot understand graphql it send it to graphqlHTTP
// Tell our App to listen to a Specific port on our computer.
app.listen(4000, () => { // Arrow means Callback function ES6 function by Arrow
  console.log('now listening for requests on port 4000');
});

// 2- Set up GRAPHQL to work with EXPRESS Application