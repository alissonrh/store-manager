const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  try {
    const { message } = await productService.getAllProducts();
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const { type, message } = await productService.isProductsExist(productId);

    if (type) {
      return res.status(errorMap.mapError(type)).json({ message });
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const { type, message } = await productService.createNewProduct(name);

    if (type) {
      return res.status(errorMap.mapError(type)).json({ message });
    }

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const dataToUpdate = { id: productId, ...req.body };
    const { type, message } = await productService.attProductById(productId, dataToUpdate);

    if (type) {
      return res.status(errorMap.mapError(type)).json({ message });
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { type, message } = await productService.deleteProduct(productId);

    if (type) {
      return res.status(errorMap.mapError(type)).json({ message });
    }

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductByQuery = async (req, res) => {
  try {
    const { q } = req.query;
    const result = await productService.getProductByQuery(q);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getProductById,
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProduct,
  getProductByQuery,
};
