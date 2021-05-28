require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connection established')
    }).catch((err) => {
        console.error(err)
    })

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3333, () => console.log('Server started!'))