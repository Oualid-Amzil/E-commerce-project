const express = require("express");
const morgan = require("morgan");
const categoryRoutes = require("./routers/categoryRoutes");
const orderRoutes = require("./routers/orderRoutes");
const productRoutes = require("./routers/productRoutes");
const userRoutes = require("./routers/userRoutes");
const cors = require("cors");

const app = express();

app.options("*", cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

module.exports = app;
