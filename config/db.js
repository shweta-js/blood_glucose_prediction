
const mongoose = require("mongoose");
require("dotenv").config();
const connection = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_CONN, {
      
      useUnifiedTopology: true,
      
    });
    console.log("MONGOOSE CONNECTED");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
