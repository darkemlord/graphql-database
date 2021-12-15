const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolvers');
const mongoose = require('mongoose');
require('dotenv').config( { path: ".env" }); //calling the ENV
const post = require('./models/Post');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

console.log(process.env.DB)
mongoose.connect(process.env.DB, { useNewUrlParser: true })

server.listen({ port: 5000})
  .then(({url}) => {
    console.log(`server running at ${url}` )
  })
