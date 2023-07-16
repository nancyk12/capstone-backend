const Favorite = require('../model/Favorite');

const addFavorite = async (req, res) => {
    try {
      const { animal } = req.body;
      // Create a new favorite entry in the database
      const favorite = new Favorite({
        animal,
      });
      await favorite.save();
      res.status(201).json(favorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  module.exports = {
    addFavorite,
  };

  
  
  
  
  

const favoritesController = {
  getAllFavorites: async (req, res) => {
    try {
      const favorites = await Favorite.find();
      res.json(favorites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  addToFavorites: async (req, res) => {
    try {
      const { id, name, age, breeds, gender, contact, image } = req.body;
      const favorite = new Favorite({
        id,
        name,
        age,
        breeds,
        gender,
        contact,
        image,
      });
      await favorite.save();
      res.status(201).json(favorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  removeFromFavorites: async (req, res) => {
    try {
      const { id } = req.params;
      await Favorite.findByIdAndDelete(id);
      res.json({ message: 'Favorite removed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  removeAllFavorites: async (req, res) => {
    try {
      await Favorite.deleteMany();
      res.json({ message: 'All favorites removed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = favoritesController;