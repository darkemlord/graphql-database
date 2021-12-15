const Post = require("../models/Post");

const resolvers = {
  Query: {
    async getPosts(){
      try {
         return await Post.find();
      } catch (err) {
        throw new Error(err)
      }
    }
  }
};

module.exports = resolvers;
