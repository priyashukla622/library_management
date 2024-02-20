const modelRequire = require("../model/user");
const deleteUser = async (req, res) => {
  const username= req.body.authorName;
  try {
    const userAuthor = await modelRequire.UserSchema.findOne({ username: username });
    if (userAuthor !== null) {
      await modelRequire.UserSchema.deleteOne({ username: username })
        .then(() => {
          res.json("User deleted Successfully");
          console.log("User deleted Successfully");
        })
        .catch((error) => {
          res.json({ message: "User is not deleted" });
          console.log("User is not deleted");
        });
    } else {
      res.json("Please provide correct authorName");
    }
  } catch (error) {
    res.json("Please provide correct authorName");
    console.log(error, "User is not found");
  }
};
module.exports = { deleteUser };