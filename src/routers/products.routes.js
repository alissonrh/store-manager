const express = require('express');
const productsController = require('../controllers/product.controller');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/search', productsController.getProductByQuery);

router.post('/', validateProductName,
  productsController.createProducts);

router.get('/:productId', productsController.getProductId);
router.put('/:productId', validateProductName, productsController.attProductId);
router.delete('/:productId', productsController.deleteProduct);

module.exports = router;