const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const {schema} = require('./Schema/schema');
const {serverCalls} = require('./graphql_calls/server');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: serverCalls,
    graphiql: true,
}));

app.listen(4000);

console.log('Running local graphql api server at http://localhost:4000/graphql');