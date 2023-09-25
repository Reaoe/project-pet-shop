const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  nameCategory: {
    type: String,
    required: true,
    unique: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Tham chiếu lại chính mô hình danh mục
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
