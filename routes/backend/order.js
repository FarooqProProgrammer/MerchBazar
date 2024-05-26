const express = require('express');
const { createOrder, getAllOrder } = require('../../controller/OrderHistory');

const router = express.Router();



router.post('/create-order',createOrder)
router.get('/get-all-order',getAllOrder)




module.exports = router;
