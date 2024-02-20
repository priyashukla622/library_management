

const modelRequire = require("../model/user");
const addUser = async (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    contect: req.body.contect,
  };

  if (!data.username || !data.email || !data.password || !data.contect) {
    // console.log(data);
    res.status(400).json("Please send proper user data");
  } else {
    try {
      await modelRequire.UserSchema.create(data);
      res.status(201).json({"massage":"User added successfully",data});
      console.log("user added successfully");
    } catch (error) {
      res.status(500).json({ message: "Unable to add user", error: error.message });
      console.error("Unable to add user:", error);
    }
  }
};

module.exports = { addUser };



