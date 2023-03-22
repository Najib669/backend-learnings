const mongoose = require("mongoose");
require('dotenv').config({path:'./Config/.env'})

const db=process.env.mongoUrl
const connectDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("database is successfull connected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;
