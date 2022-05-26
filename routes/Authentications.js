const router = require('express').Router();
const User = require('../models/User');

//  SIGN UP
router.post('/register', async (request, response) => {
  const newUser = new User({
    userName: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  try {
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
