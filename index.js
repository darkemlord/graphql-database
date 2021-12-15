const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolvers/index');
const mongoose = require('mongoose');
require('dotenv').config( { path: ".env" }); //calling the ENV


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
