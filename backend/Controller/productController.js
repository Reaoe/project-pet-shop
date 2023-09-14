const Product = require("../Model/productModel");
const configFireBase = require("../config/FirebaseConfig");
const firebase = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/appError");
firebase.initializeApp(configFireBase);
const storage = getStorage();

const getLinkURL = async (file, name = "") => {
  file.originalname = `proudct-${name}-${Date.now()}.jpeg`;

  const storageRef = ref(storage, "image/" + file.originalname);

  const metadata = {
    contentType: "image/jpeg",
  };

  const snapshot = await uploadBytes(storageRef, file.buffer, metadata);

  const linkURL = await getDownloadURL(snapshot.ref);

  return linkURL;
};

exports.createProduct = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError("No file upload", 404));
  }
  const linkURL = await getLinkURL(req.file, req.params.id);
  const product = await Product.create({ ...req.body, image: linkURL });

  res.status(201).json({
    status: "Success",
    data: {
      data: product,
    },
  });
});

exports.updateOneProduct = catchAsync(async (req, res, next) => {
  const updateData = { ...req.body };
  if (req.file) {
    const linkURL = await getLinkURL(req.file);
    updateData.image = linkURL;
  }

  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updateProduct) {
    return next(new AppError("Khong co Id san pham de update", 404));
  }
  res.status(200).json({
    status: "Success",
    data: {
      data: updateProduct,
    },
  });
});

exports.deleteOneProuduct = catchAsync(async (req, res, next) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deleteProduct) {
    return next(
      new AppError("Khong co doi tuong nao ton tai trong san pham de xoa", 404)
    );
  }
  res.status(200).json({
    status: "success",
    data: {
      data: null,
    },
  });
});

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const getAllProduct = await Product.find();
  res.status(200).json({
    status: "succes",
    data: {
      getAllProduct,
    },
  });
});

exports.getOneProduct = catchAsync(async (req, res, next) => {
  const getOneProduct = await Product.findById(req.params.id);
  if (!getOneProduct) {
    return next(new AppError("Khong tim thay Id san pham nay ", 404));
  }
  res.status(200).json({
    status: "succes",
    data: {
      doc,
    },
  });
});
