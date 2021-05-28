const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }

})

module.exports = mongoose.model('book', bookSchema)