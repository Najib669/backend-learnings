
const express = require('express');
const router = express.Router();
const saveProduct = require('../controllers/saveProduct');

router.post('/newp', saveProduct);

module.exports = router;