const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  nameCategory: {
    type: String,
    required: true,
    unique: true,
  },
  parent: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
