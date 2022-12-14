const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const createSaleController = async (req, res) => {
  const salesProducts = req.body;
  
  const { type, message } = await salesService.createSale(
    salesProducts,
  );
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const { message } = await salesService.getAllSales();
  console.log(message);
  res.status(200).json(message);
};

const getSaleById = async (req, res) => {
  const { salesId } = req.params;
  const { type, message } = await salesService.isSaleExist(salesId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { salesId } = req.params;
  const { type, message } = await salesService.deleteSale(salesId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json(message);
};

const attSale = async (req, res) => {
  const { salesId } = req.params;
  const salesProductsToAtt = req.body;

  const { type, message } = await salesService.updateSale(
    salesId,
    salesProductsToAtt,
  );

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  
  return res.status(200).json(message);
};

module.exports = {
  createSaleController,
  getAll,
  getSaleById,
  deleteSale,
  attSale,
};