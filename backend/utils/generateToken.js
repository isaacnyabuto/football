// utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  // payload: user id and username
  return jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

module.exports = generateToken;
