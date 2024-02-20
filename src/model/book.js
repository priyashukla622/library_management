const mongoose = require('mongoose');
// const { issueBook } = require('../controlles/issueBook');

const Schema = new mongoose.Schema({
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
    }
});

const BookSchema = mongoose.model("BookData", Schema);

module.exports = { BookSchema };







