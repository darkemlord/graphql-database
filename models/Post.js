const {model, Schema} = require('mongoose');

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: Date.now(),
  comments: [
    {
      body: String,
      username: String,
      createdAt: Date.now(),
    }
  ],
  likes: [
    {
    username: String,
    createdAt: Date.now(),
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = module('Post', postSchema);
