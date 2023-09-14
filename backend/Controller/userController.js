const User = require("../Model/userModel");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/appError");

exports.createInformationCustomer = catchAsync(async (req, res, next) => {
  //const { firstName, lastName, email, phone, address } = req.body;
  const newCustomer = await User.create({
    //req.body
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });

  console.log(newCustomer);
  res.status(201).json({
    status: "Success",
    data: {
      data: newCustomer,
    },
  });
});
