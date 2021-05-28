const Filme = require('../models/filme')

const createAFilm = async (req, res) => {
    const filme = new Filme({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const novoFilme = await filme.save()
        res.status(201).json(novoFilme)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }        
}

const listFilms = async (req, res) => {
    const filmes = await Filme.find()
    res.json(filmes)
}

const listOneFilm = async (req, res) => {
    try{
        const filme = await Filme.findById(req.params.id)
        if(filme == null){
        return res.status(404).json({message: 'Cannot find film'})
        }
        res.json(filme)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    
}

const updateAFilm = async (req, res) => {
    try{
        const filme = await Filme.findById(req.params.id)
        if(filme == null){
        return res.status(404).json({message: 'Cannot find film'})
        }
        if (req.body.title != null) {
            filme.title = req.body.title
        }
        if (req.body.description != null) {
            filme.description = req.body.description
        }
        const updatedfilme = await filme.save()
        res.json(updatedfilme)    
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deleteAFilm = async (req, res) => {
    try{
        const filme = await Filme.findById(req.params.id)
        if(filme == null){
        return res.status(404).json({message: 'Cannot find film'})
        }
        await filme.remove()
        res.json({ message: 'Filme deletado com sucesso!'})    
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}



module.exports = {
    createAFilm,
    listFilms,
    listOneFilm,
    updateAFilm,
    deleteAFilm
}