const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const { verifyTokenAuth } = require('./VerifyToken');

router.put('/:id', verifyTokenAuth, async (request, response) => {
  if (request.body.password) {
    request.body.password = CryptoJS.AES.encrypt(
      request.body.password,
      process.env.JWT_TOKEN,
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    }, { new: true });
    response.status(200).json(updatedUser);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
