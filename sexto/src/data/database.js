require('dotenv').config()
const mongoose = require('mongoose')

const connect =  () => {mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(console.log('Database connected')).catch(err => console.err)}

module.exports = { connect }