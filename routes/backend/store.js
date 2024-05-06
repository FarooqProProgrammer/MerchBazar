const express = require('express');
const { createStore, getStore, updateStore, deleteStore } = require('../../controller/store');
const router = express.Router();


router.post('/',createStore);
router.get('/get-store',getStore);
router.post('/update-store',updateStore);
router.delete('/delete-store',deleteStore);


module.exports = router;