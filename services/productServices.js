

const getProductById = (id) => {
  if (!id) {
    const error = new Error('Product ID is required');
    error.statusCode = 400;
    throw error;
  }

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
