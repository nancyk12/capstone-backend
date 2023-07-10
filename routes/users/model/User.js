const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    firstname: String,
    lastname: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false, 
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)