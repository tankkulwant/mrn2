const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  photoURL: String,
});

module.exports = mongoose.model('User', UserSchema);

