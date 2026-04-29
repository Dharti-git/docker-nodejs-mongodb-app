const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://mongodb:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Docker app is working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
