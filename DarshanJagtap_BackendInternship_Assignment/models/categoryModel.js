const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, 'a category must need a name']
    },
    user:{
        type: mongoose.Schema.ObjectId,
        required:[true,'a category must have a user'],
        ref: 'User'
    }
})

const Category=mongoose.model('Category', categorySchema);
module.exports = Category;