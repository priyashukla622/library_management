const modelRequire = require("../model/user");

const viewUser = async (req, res) => {
  try { // Log the request body
      const data = await modelRequire.UserSchema.find({});
      res.status(200).json({ data });
      console.log("Users fetched successfully");
  } catch (error) {
      res.status(500).json({ error: error.message });
      console.error("Unable to fetch users:", error);
  }
}

 module.exports = { viewUser };
