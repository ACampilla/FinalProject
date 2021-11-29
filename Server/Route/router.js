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

module.exports = route;