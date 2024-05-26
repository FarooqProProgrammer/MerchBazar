const express = require('express');
const Cart = require("../../model/cart");
const { logout } = require('../../controller/auth');
const route = express.Router();


route.get('/logout',logout)


module.exports = route