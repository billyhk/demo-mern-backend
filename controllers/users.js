const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// routes/controllers here

module.exports = router;

// SIGN UP
// POST /api/signup
// Using async/await
// Add the async keyword
router.post('/signup', async (req, res, next) => {
	// wrap it in a try/catch to handle errors
	try {
		// store the results of any asynchronous calls in variables
		// and use the await keyword before them
		const password = await bcrypt.hash(req.body.password, 10);
		const user = await User.create({ email: req.body.email, name: req.body.name, password });
		res.status(201).json(user);
	} catch (error) {
		// return the next callback and pass it the error from catch
		return next(error);
	}
});
// SIGN IN
// POST /api/signin
router.post('/signin', (req, res, next) => {});