const gql = require('graphql-tag');

//definitions
const typeDefs = gql`
  type Post{
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getPosts: [Post]
  }
`
module.exports = typeDefs;
