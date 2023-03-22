const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./productSchema");
const moment = require("moment-timezone");

const orderSchema = new Schema({
  // products: [Product.schema],
  shippingAdress: String,
  phoneNumber: Number,
  paymentMethode: String,
   userId: String,
   Status: String,
  // transactionId: String,
  // validatedBy:String,
  validatedaAt: {
    type: Date,
    default: moment(Date.now()).tz("Europe/Paris").format(),
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;