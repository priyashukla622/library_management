const {UserSchema, BookScheme} = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "NOTESAPI";

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await UserSchema.findOne({ email: email });
    console.log(existingUser)
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await UserSchema.create({
      email: email,
      password: hashedPassword,
      username: username,
    });
    console.log(result)
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserSchema.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(404).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(200).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { login, signup};