const express = require('express')
const app = express()

//connect db
const database = require('./src/data/database')
database.connect()

//use express.json
app.use(express.json())

//use router
const booksRoute = require('./src/routes/books.routes')
app.use('/books', booksRoute)


app.listen(3333, ()=> console.log('Server started!'))