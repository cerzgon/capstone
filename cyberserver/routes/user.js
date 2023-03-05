// user.js
const express = require('express');
const router = express.Router(); 
const { signup, signin, logout, singleUser } = require("../controllers/user");
const { isAuthenticated } = require("../middleware/auth");

router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', isAuthenticated, logout); // Added isAuthenticated middleware to ensure user is logged in
router.get('/user/:id', singleUser );

module.exports = router;
