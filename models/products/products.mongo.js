const mongoose = require("mongoose");
const categoriesMongo = require("../categories/categories.mongo");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["physical", "digital"],
    default: "physical",
    required: true,
  },
  categoryId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: categoriesMongo,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model("product", productSchema);
