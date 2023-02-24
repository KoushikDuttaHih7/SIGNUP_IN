const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

connectDB();
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
