const { model, Schema } = require('mongoose');

const userSchema = new Schema( {
  username: String,
  password: String,
  email: String,
  createdAt: Date.now()
})

module.exports = model('User', userSchema);
