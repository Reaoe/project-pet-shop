const User = require("../Model/userModel");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/appError");

const APIFeatures = require("../Utils/apiFeature");
const getLinkURL = require("../Utils/firebase");

exports.updateInformationUser = catchAsync(async (req, res, next) => {
  const { email, role } = req.body;

  if (email) {
    return next(new AppError("Cannot update email", 400));
  }

  if (role) {
    return next(new AppError("Cannot update role", 400));
  }
  const updateData = { ...req.body };
  if (req.file) {
    const linkURL = await getLinkURL(req.file);
    updateData.image = linkURL;
  }

  const newUser = await User.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!newUser) {
    next(new AppError("Khong co Id user de update", 404));
  }

  res.status(201).json({
    status: "Success",
    data: {
      newUser,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const deleteUser = await User.findByIdAndDelete(req.params.id);

  if (!deleteUser) {
    return next(new AppError("Khong ton use nay de xoa"), 404);
  }
  res.status(200).json({
    status: "Success",
    data: null,
  });
});

exports.getOneUser = catchAsync(async (req, res, next) => {
  const getOneUser = await User.findById(req.params.id);
  if (!getOneUser) {
    return next(new AppError("Khong ton tai user nay"), 404);
  }
  res.status(200).json({
    status: "Success",
    data: {
      getOneUser,
    },
  });
});

exports.getAllUser = catchAsync(async (req, res, next) => {
  const getAllUser = await User.find();
  res.status(200).json({
    status: "succes",
    data: {
      getAllUser,
    },
  });
});
