const express = require('express');
const router = express.Router();
const productController = require('./users/controller/productController');
const Product = require('./users/model/Product');

// Get all products
router.get('/all-products', productController.getProducts);

// Get product by ID
router.get('/:id', productController.getProductById);

router.post('/', async (req, res) => {
    try {
      const product = req.body;
      const newProduct = await Product.create(product);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
module.exports = router;