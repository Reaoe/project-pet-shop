const mongoose = require("mongoose");

const categoryTypeSchema = new mongoose.Schema({
  nameTypeCategory: {
    type: String,
  },
  parent: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
});

const Category = mongoose.model("CategoryType", categoryTypeSchema);

module.exports = Category;
