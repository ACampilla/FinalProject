const express = require('express');

const route = express.Router();

const services = require('../Services/services');
const controller = require('../Controller/controller');

//home route method get
route.get('/',services.homeRoutes);


//needs fixing
route.get('/cart',services.cart);
route.get('/Food', services.Food);

route.get('/login', services.login);

route.get('/merch', services.merch);

route.get('/skincare', services.skincare);
route.get('/tribe', services.tribe);

route.get('/signup', services.signup)

//API

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);


route.post('/login', controller.checkCredentials)

//API orders

route.post('/api/orders', controller.create);
route.get('/api/order', controller.find);


//API products


route.post('/api/products', controller.create);
route.get('api/products', controller.find);

//API shipping

route.post('api/shipping', controller.create);
route.post('api/shipping', controller.find)



module.exports = route;