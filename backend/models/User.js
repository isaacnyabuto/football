// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  teamName: { type: String, required: true },
  logoUrl: { type: String }, // path to uploads/logo-file
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
