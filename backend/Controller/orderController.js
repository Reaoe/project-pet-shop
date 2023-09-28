const Cart = require("../Model/orderModel");
const AppError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");

exports.createOrder = catchAsync(async (req, res, next) => {
  const newOrder = await Cart.create(req.body);
  res.status(200).json({
    status: "Sucees",
    data: {
      newOrder,
    },
  });
});

exports.getAllOrder = catchAsync(async (req, res, next) => {
  const getAllOrder = await Cart.find().populate({
    path: "customer product.productItem",
    select: "firstName lastName productName price",
  });
  res.status(200).json({
    status: "succes",
    data: {
      getAllOrder,
    },
  });
});
