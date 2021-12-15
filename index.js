const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolvers');
const mongoose = require('mongoose');

const server = new ApolloServer({
  typeDefs,
  resolvers
});
mongoose.connect()

server.listen({ port: 5000})
  .then(({url}) => {
    console.log(`server running at ${url}` )
  })
