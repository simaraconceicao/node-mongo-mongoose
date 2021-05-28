const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect("mongodb://localhost:27017/books", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connection established'))
    .catch((err) => console.error(err))
}

module.exports = { connect }

