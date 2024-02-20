
const modelRequire = require("../model/user");

const editUser = async (req, res) => {
    const { username, email, password, contect } = req.body;
    // console.log(name)

    try {
        const existingUser = await modelRequire.UserSchema.findOne({ username });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update the user properties
        existingUser.email = email;
        existingUser.password = password;
        existingUser.contect = contect;

        // Save the changes
        await existingUser.save();

        // Respond with success message and updated user data
        res.status(200).json({ message: "User edited successfully", existingUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { editUser };


