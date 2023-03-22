const User = require("../Models/userSchema.js");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config({path:'./Config/.env'})

const secret=process.env.secretkey


exports.register = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).json({ msg: " this email already exist" });
    }
    const newUser = new User({ firstName, lastName, email, password, phone });
    const salt = await bc.genSalt(10);
    const hash = await bc.hashSync(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
      firstName: newUser.firstName,
    };
    const token = jwt.sign(payload, secret);
    res.status(200).send({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        password: newUser.password,
        phone: newUser.phone,
        firstName: newUser.firstName,
        lastName: newUser.lastName
      },
    });



  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
