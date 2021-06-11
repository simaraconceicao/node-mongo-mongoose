const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')


//listar todas as series
router.get('/', controller.getAll )

//criar uma nova serie
router.post('/', controller.create)

//listar uma serie
router.get('/:id', controller.getOne )

//atualizar uma informacao especifica numa serie
router.patch('/:id', controller.updateOne)

//deletar uma serie
router.delete('/:id', controller.deleteOne)

module.exports = router