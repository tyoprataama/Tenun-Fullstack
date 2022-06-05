const router = require('express').Router();
const Cart = require('../models/Cart');
const { verifyTokenAuth, verifyToken, verifyTokenAdmin } = require('./VerifyToken');

//  Create cart
router.post('/', verifyToken, async (request, response) => {
  const newCart = new Cart(request.body);
  try {
    const savedCart = await newCart.save();
    response.status(200).json(savedCart);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Update cart
router.put('/:id', verifyTokenAuth, async (request, response) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    }, { new: true });
    response.status(200).json(updatedCart);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Delete cart
router.delete('/:id', verifyTokenAuth, async (request, response) => {
  try {
    await Cart.findByIdAndDelete(request.params.id);
    response.status(200).json('Cart has been deleted...');
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Get cart
router.get('/find/:userId', verifyTokenAuth, async (request, response) => {
  try {
    const cart = await Cart.findOne({ userId: request.params.userId });
    return response.status(200).json(cart);
  } catch (error) {
    return response.status(500).json(error);
  }
});

// Get all cart
router.get('/', verifyTokenAdmin, async (request, response) => {
  try {
    const carts = await Cart.find();
    response.status(200).json(carts);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
