const router = require('express').Router();
const Order = require('../models/Order');
const { verifyTokenAuth, verifyToken, verifyTokenAdmin } = require('./VerifyToken');

//  Create order
router.post('/', verifyToken, async (request, response) => {
  const newOrder = new Order(request.body);
  try {
    const savedOrder = await newOrder.save();
    response.status(200).json(savedOrder);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Update order
router.put('/:id', verifyTokenAdmin, async (request, response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    }, { new: true });
    response.status(200).json(updatedOrder);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Delete order
router.delete('/:id', verifyTokenAdmin, async (request, response) => {
  try {
    await Order.findByIdAndDelete(request.params.id);
    response.status(200).json('Order has been deleted...');
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Get order
router.get('/find/:userId', verifyTokenAuth, async (request, response) => {
  try {
    const orders = await Order.find({ userId: request.params.userId });
    return response.status(200).json(orders);
  } catch (error) {
    return response.status(500).json(error);
  }
});

// Get all order
router.get('/', verifyTokenAdmin, async (request, response) => {
  try {
    const orders = await Order.find();
    response.status(200).json(orders);
  } catch (error) {
    response.status(500).json(error);
  }
});

//  Get monthly income
router.get('/income', verifyTokenAdmin, async (request, response) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ]);
    response.status(200).json(income);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
