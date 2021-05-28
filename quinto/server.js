const express = require('express')
const app = express()

//conectar o db
const db = require('./src/data/database')
db.connect()

app.use(express.json())

//usar a rota
const seriesRouter = require('./src/routes/series.routes')
app.use('/series', seriesRouter)


app.listen(3333, ()=> console.log('Server listening on port 3333'))