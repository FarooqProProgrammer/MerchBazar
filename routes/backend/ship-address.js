const express = require('express');
const { addOrUpdateShippingInfo } = require('../../controller/ShippingController');

const route = express.Router();


route.post('/update-ship-info',addOrUpdateShippingInfo)



module.exports = route;