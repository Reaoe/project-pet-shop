const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, "Ten dich vu khong duoc de trong"],
    unique: true,
  },

  price: {
    type: Number,
    required: [true, "khong duoc de trong so tien"],
  },
  description: {
    type: String,
  },
});

const Service = mongoose.model("Service", petSchema);

module.exports = Service;
