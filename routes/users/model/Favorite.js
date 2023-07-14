const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  breeds: { type: Object, required: true },
  gender: { type: String, required: true },
  contact: { type: Object, required: true },
  image: { type: String, required: true },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;