const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number
})

module.exports = mongoose.model('users', userSchema)   // here users is a collection name 
