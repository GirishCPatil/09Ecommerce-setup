

const getProductById = (id) => {
  return `Fetching product with ID: ${id}`;
};

const addProduct = (req) => {
   const productName = req.body.productName;

  console.log('Product received:', productName);

  return `Product added: ${productName}`;
};

module.exports = {
  getProductById,
  addProduct
};
