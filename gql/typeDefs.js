const gql = require('graphql-tag');

//definitions
const typeDefs = gql`
  type Query {
    papi: String!
  }
`
module.exports = typeDefs;
