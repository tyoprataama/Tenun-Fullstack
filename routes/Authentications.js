const router = require('express').Router();
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
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
      return response.status(401).json('Wrong Username');
    }
    //  Encrypt password
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD);
    const Originpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (Originpassword !== request.body.password) {
      return response.status(401).json('Wrong Password');
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_TOKEN,
      { expiresIn: '2d' }, // Access token will be expire in 2 days
    );
    const { password, ...others } = user._doc;
    return response.status(200).json({ ...others, accessToken });
  } catch (error) {
    return response.status(500).json(error);
  }
});

module.exports = router;
