// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const upload = require('../middleware/uploads');

// register: multipart form (logo optional)
// fields: username, password, teamName
router.post('/register', upload.single('logo'), authController.register);

// login: json body { username, password }
router.post('/login', authController.login);

module.exports = router;
