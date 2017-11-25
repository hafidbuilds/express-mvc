const mongoose = require('mongoose');
const AutoIncrement = require("mongoose-sequence")(mongoose)
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  role: {
    type: String,
    default: 'user'
  },
  password: String,
})

UserSchema.plugin(AutoIncrement, { id: "user_id", inc_field: "id" })
const User = mongoose.model('User', UserSchema);

module.exports = User;