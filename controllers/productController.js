const productService = require('../services/productServices.js');
const path = require('path');


const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname,"..", 'view', 'products.html'));
};


const getProductById = (req, res, next) => {
  try {
    const result = productService.getProductById(req.params.id);
    res.send(result);
  } catch (err) {
    next(err);
  }
};


const addProduct = (req, res, next) => {
  try {
    const result = productService.addProduct();
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};
