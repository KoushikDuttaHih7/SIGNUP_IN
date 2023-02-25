const express = require("express");
const router = express.Router();
const {
  register,
  logIn,
  deleteUser,
  getUsers,
} = require("../controllers/userController");

// Register User
router.post("/register", register);
// Login User
router.post("/login", logIn);
// Delete User
router.delete("/delete/:id", deleteUser);
// Get All User
router.get("/users", getUsers);

module.exports = router;
