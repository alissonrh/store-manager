const express = require('express');
const productsController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:productId', productsController.getProductId);

module.exports = router;