const express = require('express');
const { getAll, findById } = require('../models/products.model');

const router = express.Router();

router.get('/', async (_req, res) => {
  const result = await getAll();
  res.status(200).json(result);
});

router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  const result = await findById(productId);
  res.status(200).json(result);
});

module.exports = router;