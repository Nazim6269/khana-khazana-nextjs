const { Schema, default: mongoose } = require('mongoose');

const userSchema = new Schema({
  fname: {
    required: true,
    type: String,
  },
  lname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model('users', userSchema);
