
const modelRequire = require("../model/book");

const editBook = async (req, res) => {
    const { authorName, title, name } = req.body;

    try {
        // Find a book by its name
        const existingBook = await modelRequire.BookSchema.findOne({ name });

        if (!existingBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        // Update the book properties
        existingBook.title = title;
        existingBook.authorName = authorName;

        // Save the changes
        await existingBook.save();

        // Respond with success message and updated book data
        res.status(200).json({ message: "Book edited successfully", existingBook });

    } catch (error) {
        console.error("Error editing book:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { editBook };




