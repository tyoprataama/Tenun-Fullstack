/* eslint import/newline-after-import: "off" */
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/User');
const authRoute = require('./routes/Authentications');
const productRoute = require('./routes/Product');
const cartRoute = require('./routes/Cart');
const orderRoute = require('./routes/Order');
const stripeRoute = require('./routes/Stripe');

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('DataBase connection successful'))
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log('Backend server is ready');
});
