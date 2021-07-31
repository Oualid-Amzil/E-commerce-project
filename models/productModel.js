const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
  },
  description: {
    type: String,
    required: [true, "Please provide a description."],
    trim: true,
  },
  richdescription: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Please provide a category."],
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 200,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numreviews: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "Category",
    select: "-__v",
  });
});

const Product = mongoose.module("Product", productSchema);

module.products = Product;
