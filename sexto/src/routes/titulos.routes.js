const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')


//listar todas os titulos
router.get('/', controller.getAll )

//listar todos os titulos por estudio
router.get('/marvel', controller.getAllMarvel)
router.get('/ghibli', controller.getAllGhibli)
router.get('/pixar', controller.getAllPixar)

//criar um novo titulo
router.post('/', controller.create)

//listar um titulo
router.get('/:id', controller.getOne )

//atualizar uma informacao especifica num titulo
router.patch('/:id', controller.updateOne)

//deletar um titulo
router.delete('/:id', controller.deleteOne)

module.exports = router