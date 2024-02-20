
const userRequire = require("../model/user");
const modelRequire = require("../model/book");
const issueModel = require("../model/issue");

const returnBook = async (req, res) => {
    const { authorName, email } = req.body;
    console.log(email);

    try {
        console.log("Received request data:", req.body);

        // Check if the user exists
        const existingUser = await userRequire.UserSchema.findOne({ email });
        console.log(existingUser);

        if (!existingUser) {
            console.log("User not found:", email);
            return res.status(400).json({ message: "User not found" });
        }

        // Check if the book is available for return
        const issuedBook = await issueModel.IssueSchema.findOne({ email, authorName });

        if (!issuedBook) {
            console.log("Book not issued to the user:", authorName);
            return res.status(404).json({ response: "Book not issued to the user" });
        }

        // Remove the issued book record from the IssueSchema
        await issueModel.IssueSchema.deleteOne({ email, authorName });

        // Respond with success message
        console.log("Book returned successfully");
        return res.status(200).json({ response: "Book returned successfully" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { returnBook };


