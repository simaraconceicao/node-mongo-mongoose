const express = require('express')
const app = express()

//conectar o db
const db = require('./src/data/database')
db.connect()

app.use(express.json())

//usar a rota
const estudiosRouter = require('./src/routes/estudios.routes')
app.use('/estudios', estudiosRouter)

const titulosRouter = require('./src/routes/titulos.routes')
app.use('/titulos', titulosRouter)


app.listen(3333, ()=> console.log('Server listening on port 3333'))