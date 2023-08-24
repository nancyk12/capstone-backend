const express = require('express');
const router = express.Router();
const productController = require('./users/controller/productController');
const Product = require('./users/model/Product');
const cloudinary = require("../utils/cloudinary");

// Get all products
router.get('/all-products', productController.getProducts);

// Get product by ID
router.get('/:id', productController.getProductById);

// Create product
router.post('/', async (req, res) => {

  const {
    name, slug, price, image, category, brand, description
  } = req.body;

    try {

      if(image){
        const uploadRes= await cloudinary.uploader.upload(image, {
          upload_preset: "online-shop"
        })

        if(uploadRes){
          const product = new Product({
            name,
            slug,
            price, 
            image: uploadRes,
            category,
            brand,
            description,
          });

          const savedProduct = await product.save();
          req.statusCode(200).send(savedProduct);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  router.get("/", async (req, res) => {
    try {
      const products = await Product.find()
      res.status(200).send(products)
  } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  })
      
  
module.exports = router;