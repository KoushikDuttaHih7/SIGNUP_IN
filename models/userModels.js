const mongoose = require("mongoose");
const validator = require("validator");
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
      validate: [validator.isEmail, "please enter valid email"],
    },
    password: {
      type: String,
      required: [true, "Enter a password"],
      minLength: [7, "Characters must be more than 7"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
