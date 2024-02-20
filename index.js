
const express = require("express");
const app = express();

const userRouter = require("./src/route/userRouter.js");
const mongoose = require("mongoose");
app.use(express.json());

const port = process.env.PORT || 6000;

try {
  mongoose.connect("mongodb://127.0.0.1:27017/libraryBook");
  console.log("connected");
} 
catch (error) {
  console.log(error, "mongoose not connected");
}

// Use the userRouter middleware
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





