const router = require('express').Router();
const Product = require('../models/Product');
const { verifyTokenAdmin } = require('./VerifyToken');

//  Create product
router.post('/', verifyTokenAdmin, async (request, response) => {
  const newProduct = new Product(request.body);
  try {
    const savedProduct = await newProduct.save();
    response.status(200).json(savedProduct);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Update product
router.put('/:id', verifyTokenAdmin, async (request, response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    }, { new: true });
    response.status(200).json(updatedProduct);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Delete user
router.delete('/:id', verifyTokenAdmin, async (request, response) => {
  try {
    await Product.findByIdAndDelete(request.params.id);
    response.status(200).json('Product has been deleted...');
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Get product
router.get('/find/:id', async (request, response) => {
  try {
    const product = await Product.findById(request.params.id);
    return response.status(200).json(product);
  } catch (error) {
    return response.status(500).json(error);
  }
});

// Get all users
router.get('/', async (request, response) => {
  const queryNew = request.query.new;
  const queryCategory = request.query.category;
  try {
    let products;
    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json(error);
  }
});

module.exports = router;
