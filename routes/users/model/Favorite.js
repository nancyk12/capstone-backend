const mongoose = require('mongoose');

// const favoriteSchema = new mongoose.Schema({
//   animal: {
//     type: mongoose.Schema.Types.Mixed,
//     required: true,
//   },
// });

const favoriteSchema = new mongoose.Schema({
    // id: { type: String, default: uuidv4 },

    id: { type: String },
    image: { type: String },
    name: { type: String },
    age: { type: String },
    breeds: { type: String },
    gender: { type: String },
    location: { type: String },
   

});


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;