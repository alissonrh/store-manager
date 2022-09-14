const express = require('express');
const productsController = require('../controllers/product.controller');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.post('/', validateProductName,
  productsController.createProducts);

router.get('/:productId', productsController.getProductId);

module.exports = router;