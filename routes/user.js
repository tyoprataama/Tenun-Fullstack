const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const { verifyTokenAuth, verifyTokenAdmin } = require('./VerifyToken');

//  Update user
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

//  Delete user
router.delete('/:id', verifyTokenAuth, async (request, response) => {
  try {
    await User.findByIdAndDelete(request.params.id);
    response.status(200).json('User has been deleted...');
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Get user
router.get('/find/:id', verifyTokenAdmin, async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    const { password, ...others } = user._doc;
    return response.status(200).json(others);
  } catch (error) {
    return response.status(500).json(error);
  }
});

module.exports = router;
