const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');

//  SIGN UP
router.post('/register', async (request, response) => {
  const newUser = new User({
    username: request.body.username,
    email: request.body.email,
    //  To make the user password secret
    password: CryptoJS.AES.encrypt(request.body.password, process.env.PASSWORD).toString(),
  });
  try {
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  LOGIN
router.post('/login', async (request, response) => {
  try {
    const user = await User.findOne({ username: request.body.username });

    if (!user) {
      response.status(401).json('Wrong Username');
    }
    //  Encrypt password
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD);
    const Oripassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (Oripassword !== request.body.password) {
      response.status(401).json('Wrong Password');
    }
    const { password, ...others } = user._doc;
    response.status(200).json(others);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
