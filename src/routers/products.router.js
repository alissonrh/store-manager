const express = require('express');
const productsController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.post('/', productsController.createProducts);

router.get('/:productId', productsController.getProductId);

module.exports = router;