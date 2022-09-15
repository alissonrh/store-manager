const express = require('express');
const { salesControllers } = require('../controllers');
/* const validateProductId = require('../middlewares/validateProductId');
const validateQuantity = require('../middlewares/validateQuantity');
 */
const router = express.Router();

router.post('/', salesControllers.createSale);

module.exports = router;