const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.DB_URL, { 
        useNewUrlParser: true, 
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connection established')
    }).catch((err) => {
        console.error(err)
    })
}

module.exports = { connect }
