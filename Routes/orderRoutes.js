const express = require('express');
const {saveOrder }= require('../Controllers/order.controller');
const {getOrders} = require('../Controllers/order.controller');
const {getOrder} = require('../controllers/order.controller');
const {deleteOrder} = require('../controllers/order.controller');

const router = express.Router(); 

router.post('/newO', saveOrder);
router.get('/', getOrders);
router.get('/order/:_id', getOrder);
router.delete("/deleteOrder/:_id", deleteOrder);


module.exports = router;
