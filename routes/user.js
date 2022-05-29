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

//  Get all users
router.get('/', verifyTokenAdmin, async (request, response) => {
  const query = request.query.new;
  try {
    //  If there is new query, return (2) latest users
    const user = query ? await User.find().sort({ _id: -1 }).limit(2) : await User.find();
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json(error);
  }
});

//  Get user statistic
router.get('/stats', verifyTokenAdmin, async (request, response) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month', // Month number from user sign up
          total: { $sum: 1 }, // Total user that month
        },
      },
    ]);
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
