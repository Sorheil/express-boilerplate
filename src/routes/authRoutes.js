const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

//create a new user
router.post('/register', authController.createUser);

//login a user
router.post('/login', authController.loginUser);

module.exports = router;