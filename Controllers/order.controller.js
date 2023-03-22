const Order = require("../Models/orderSchema");

// define the post-save function
exports.saveOrder = async (req, res) => {
  try {
    const { shippingAdress, phoneNumber, paymentMethode, userId, Status } =
      req.body; // assuming you have these fields in your request body
    const order = new Order({
      shippingAdress,
      phoneNumber,
      paymentMethode,
      userId,
      Status,
    });
    const saveOrder = await order.save();
    res.status(201).json(saveOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// export the function for use in your routes

//get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    orders
      ? res.status(201).json(orders)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//get one order
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params._id);
    order
      ? res.status(201).send(order)
      : res.status(401).json({ msg: "get single order failed " });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

 //delete one order
 exports.deleteOrder = async (req, res) => {
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params._id);

    res.status(201).json({ msg: "order deleted successfully" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
