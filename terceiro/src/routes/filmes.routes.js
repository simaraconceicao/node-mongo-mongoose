const express = require('express')
const router = express.Router()

const filmesController = require('../controllers/filmesController')

//Get All
router.get('/', filmesController.listFilms)

//Get One
router.get('/:id', filmesController.listOneFilm )

//Create One
router.post('/', filmesController.createAFilm)

//Update One
router.patch('/:id', filmesController.updateAFilm)


//Delete One
router.delete('/:id', filmesController.deleteAFilm)


module.exports = router