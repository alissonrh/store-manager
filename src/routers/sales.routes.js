const express = require('express');
const { salesControllers } = require('../controllers');
/* const validateProductId = require('../middlewares/validateProductId');
const validateQuantity = require('../middlewares/validateQuantity');
 */
const router = express.Router();

router.post('/', salesControllers.createSaleController);
router.get('/', salesControllers.getAll);
router.get('/:salesId', salesControllers.getSaleById);
router.put('/:salesId', salesControllers.attSale);
router.delete('/:salesId', salesControllers.deleteSale);

module.exports = router;