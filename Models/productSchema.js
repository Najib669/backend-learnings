const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");

const productSchema = new Schema({
  productName: String,
  price: String,
  stock: Number,
  imgUrl:String,
  createdAt: {
    type: Date,
    default : moment(Date.now()).tz('Europe/Paris').format(),
},


});

const product = mongoose.model("Product", productSchema);

module.exports = product;
