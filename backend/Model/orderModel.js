const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartId: {
    type: mongoose.Schema.ObjectId,
    ref: "Cart",
  },

  useId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  product: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
  payment: {
    type: String,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
