const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your name"],
      maxLength: [30, "Characters must be less than 30"],
      minLength: [7, "Characters must be more than 7"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Enter a valid email id"],
    },
    password: {
      type: String,
      unique: true,
      required: [true, "Enter a password"],
      minLength: [8, "Minimum characters must be 8"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
