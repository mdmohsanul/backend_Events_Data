const mongoose = require("mongoose");
require("dotenv").config();

const mongo_uri = process.env.MONGODB_URI;

const initializeDb = async () => {
  try {
    const connection = await mongoose.connect(mongo_uri);
    if (connection) {
      console.log("Database connected");
    }
  } catch (error) {
    console.log("Error conencting to database", error);
  }
};

module.exports = { initializeDb };
