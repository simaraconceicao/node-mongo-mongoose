const express = require('express')
const app = express()

const database = require('./src/database/database')
database.connect()

app.use(express.json())

const filmesRoutes = require('./src/routes/filmes.routes')
app.use('/filmes', filmesRoutes)

app.listen(3333, () => console.log('Server Started'))