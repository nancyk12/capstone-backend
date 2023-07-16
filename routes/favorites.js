const express = require('express');
const router = express.Router();
const favoritesController = require('./users/controller/favoritesController');
const Favorite = require('./users/model/Favorite');

router.get('/all-favorites', favoritesController.getAllFavorites);
  
  router.post('/add-to-favorite', favoritesController.addToFavorites);
  
  router.delete('/:id', favoritesController.removeFromFavorites);
  
  router.delete('/delete-all', favoritesController.removeAllFavorites);

  module.exports = router;
