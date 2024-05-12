const express = require('express');
const { addOrUpdateShippingInfo, getShippingAddress } = require('../../controller/ShippingController');

const route = express.Router();


route.post('/update-ship-info',addOrUpdateShippingInfo)
route.get('/get-shipping',getShippingAddress)



module.exports = route;