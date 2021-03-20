const  express = require('express');
const {graphqlHTTP} = require('express-graphql'); 
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/graphql');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

const port = 4000;

app.listen(port,()=>{
    console.log(`app run on port ${port}`);
});