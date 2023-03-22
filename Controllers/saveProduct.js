const Product = require("../Models/productSchema");
// define the post-save function
const saveProduct = async (req, res) => {
  try {
    const { productName, price, stock, imgUrl } = req.body; // assuming you have these fields in your request body
    const product = new Product({
      productName,
      price,
      stock,
      imgUrl,
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// export the function for use in your routes
module.exports = saveProduct;