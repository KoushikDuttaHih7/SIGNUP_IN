const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDb Connected: ${conn.connection.host}`.green);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
