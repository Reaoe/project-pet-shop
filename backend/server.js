const express = require("express");
const app = express();
const dbConnect = require("./config/DBConfig");
const productRouter = require("./Router/productRouter");
const categoryRouter = require("./Router/categoryRouter");
const userRouter = require("./Router/userRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
const AppError = require("./Utils/appError");

const port = process.env.PORT || 5000;
dbConnect();
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
