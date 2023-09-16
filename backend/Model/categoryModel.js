const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  nameCategory: {
    type: String,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
