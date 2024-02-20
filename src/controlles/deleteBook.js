
const modelRequire = require("../model/book");

const deleteBooks = async (req, res) => {
    const authorName = req.body.authorName;

    try {
        const bookAuthor = await modelRequire.BookSchema.findOneAndDelete({ authorName: authorName });

        if (bookAuthor !== null) {
            res.json("Book deleted successfully");
            console.log("Book deleted successfully");
        } else {
            res.json("Please provide correct authorName");
        }
    } catch (error) {
        res.json("Error deleting book");
        console.error(error, "Book is not found");
    }
};

module.exports = { deleteBooks };
