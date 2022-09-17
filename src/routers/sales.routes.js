const express = require('express');
const { salesControllers } = require('../controllers');
/* const validateProductId = require('../middlewares/validateProductId');
const validateQuantity = require('../middlewares/validateQuantity');
 */
const router = express.Router();

router.post('/', salesControllers.createSaleController);
router.get('/', salesControllers.getAll);
router.get('/:salesId', salesControllers.getSaleById);

module.exports = router;