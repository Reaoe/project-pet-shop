const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Ten khach hang khong duoc de trong"],
  },
  ServiceName: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Ten dich vu khong duoc de trong"],
  },
  petName: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Ten dich vu khong duoc de trong"],
  },
  appointmentDate: {
    type: Date,
    default: Date.now(),
  },
  status: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
