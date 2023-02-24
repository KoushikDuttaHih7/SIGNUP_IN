const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// Sign Up
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ user, message: "User Signed In" });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// User Login
const logIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ user, message: "User Logged In" });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// User Delete
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await user.remove();

  res.status(200).json({ message: "Deleted User", id: req.params.id });
});

module.exports = {
  register,
  logIn,
  deleteUser,
};
