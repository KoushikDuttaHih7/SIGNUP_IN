const express = require("express");
const {
  register,
  logIn,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.post("/login", logIn);
router.delete("/delete/:id", deleteUser);

module.exports = router;
