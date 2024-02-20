
const modelRequire = require("../model/book")
const viewBook = async (req, res) => {
    try {
      const bookData = await modelRequire.BookSchema.find();
      res.status(201).json(bookData);
      console.log("Book added successfully");
    } catch (error) {
      res.status(500).json({ message: "Unable to add book", error: error.message });
      console.error("Unable to add book:", error);
    }
  
}

module.exports = { viewBook };