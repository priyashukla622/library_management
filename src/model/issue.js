

const mongoose = require('mongoose');
const Issue= new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    authorName: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,


    }
});

const IssueSchema = mongoose.model("IssueData", Issue);

module.exports = { IssueSchema };