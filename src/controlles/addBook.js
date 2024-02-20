


const modelRequire = require("../model/book");

const addBook = async (req, res) => {
  const data = {
    title: req.body.title,
    authorName: req.body.authorName,
    name: req.body.name
  };

  console.log("Received book data:", data); // Add a log to check received data

  if (!data.title || !data.authorName || !data.name) {
    console.log("Incomplete book data:", data); // Add a log for incomplete data
    res.json("Please send proper book data");
  } else {
    try {
      console.log("Adding book:", data); // Add a log before creating the book
      await modelRequire.BookSchema.create(data);
      console.log("Book added successfully");
      res.json({ "message": "Book added successfully", data });
    } catch (error) {
      console.error("Error adding book:", error); // Add an error log
      res.json({ "error": error.message });
    }
  }
};

module.exports = { addBook };






