const mongoose = require('mongoose')

const serieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    seasons: {
        type: Number,
        required: true
    },
    availableOn: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('serie', serieSchema )