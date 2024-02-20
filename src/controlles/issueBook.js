
const userRequire = require("../model/user");
const modelRequire = require("../model/book");
const issueModel = require("../model/issue")
const issueBook = async (req, res) => {
    const { username, title, authorName, email } = req.body;
    console.log(username)
    try {
        console.log("Received request data:", req.body);

        // Check if the user exists
        const existingUser = await userRequire.UserSchema.findOne({ username:username });
            console.log (existingUser) 
        if (!existingUser) {
            console.log("User not found:", username);
            return res.status(400).json({ message: "User not found" });
        }

        // Check if the book is available
        const saveData = await modelRequire.BookSchema.findOne({ authorName });

        if (!saveData) {
            console.log("Book not available:", authorName);
            return res.status(404).json({ response: "Sorry, this book is not available" });
        }
        const data = {
            username:username,
            email:email,
            title:title,
            authorName:authorName,
        };
        await issueModel.IssueSchema.create(data);

        // Respond with success message
        console.log("Book issued successfully");
        return res.status(201).json({ response: "Book issued successfully" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { issueBook };










