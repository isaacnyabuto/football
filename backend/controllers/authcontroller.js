// controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const path = require('path');

exports.register = async (req, res) => {
  try {
    const { username, password, teamName } = req.body;
    // basic validation
    if (!username || !password || !teamName) {
      return res.status(400).json({ message: 'username, password and teamName are required' });
    }

    // check existing user
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(409).json({ message: 'Username already taken' });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // build user object
    const userData = {
      username,
      password: hashed,
      teamName
    };

    // if file was uploaded, store path
    if (req.file) {
      userData.logoUrl = `/uploads/${req.file.filename}`; // static serve from server
    }

    const user = await User.create(userData);

    const token = generateToken(user);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      teamName: user.teamName,
      logoUrl: user.logoUrl,
      token
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: 'username and password required' });

    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user);
    res.json({
      _id: user._id,
      username: user.username,
      teamName: user.teamName,
      logoUrl: user.logoUrl,
      token
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
