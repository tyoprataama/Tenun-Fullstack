/* eslint import/newline-after-import: "off" */
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/User');
const authRoute = require('./routes/Authentications');
const productRoute = require('./routes/Product');
const cartRoute = require('./routes/Cart');
const orderRoute = require('./routes/Order');

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('DataBase connection successful'))
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log('Backend server is ready');
});
