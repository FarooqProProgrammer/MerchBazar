const express = require('express');
const { createStore } = require('../../controller/store/info');


const route = express.Router();



route.post('/create-store-info',createStore)





module.exports = route