const Cart = require("../Model/cartModel");
const AppError = require("../Utils/appError");
const catchAsync = require("../Utils/catchAsync");

exports.createCart = catchAsync(async (req, res, next) => {
  const newCart = await Cart.create(req.body);
  res.status(200).json({
    status: "Sucees",
    data: {
      newCart,
    },
  });
});
exports.getAllCart = catchAsync(async (req, res, next) => {
  const getAllCart = await Cart.find()
    .populate({
      path: "customer",
      select: "firstName lastName",
    })
    .populate({
      path: "product.productItem",
      select: "productName price",
    });
  res.status(200).json({
    status: "succes",
    data: {
      getAllCart,
    },
  });
});
