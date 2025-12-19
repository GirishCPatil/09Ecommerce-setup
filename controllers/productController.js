const productService = require('../services/productServices.js');
const path = require('path');

const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname,"..", 'view', 'products.html'));
};

const getProductById = (req, res) => {
  const result = productService.getProductById(req.params.id);
  res.send(result);
};

const addProduct = (req, res) => {
  const result = productService.addProduct();
  res.send(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};
