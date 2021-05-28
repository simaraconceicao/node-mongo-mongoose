const express = require('express')
const router = express.Router()

const controller = require('../controllers/booksController')

//getAll
router.get('/', controller.getAll)

//createOne
router.post('/', controller.createABook)

//getOne
router.get('/:id', controller.getOne)

//updateOne
router.patch('/:id', controller.updateOne)

//removeOne
router.delete('/:id', controller.removeOne)

module.exports = router