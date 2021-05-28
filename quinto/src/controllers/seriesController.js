const Serie = require('../models/serie')

const getAll = async (req, res) => {
    const series = await Serie.find()
    res.json(series)
}

const create =  async (req,res) => {
    const serie = new Serie({
        title: req.body.title,
        seasons: req.body.seasons,
        availableOn: req.body.availableOn,
        createdAt: req.body.createdAt
    })
    try { 
        const newSerie = await serie.save()
        res.status(201).json(newSerie)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getOne = async (req, res) => {
    try {
        const serie = await Serie.findById(req.params.id)
        if(serie == null) {
            return res.status(404).json({message: 'serie nao encontrada'})
        }
        res.json(serie)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const updateOne = async (req, res) => {
    try {
        const serie = await Serie.findById(req.params.id)
        if(serie == null) {
            return res.status(404).json({message: 'serie nao encontrada'})
        }
        
        if (req.body.title != null) {
            serie.title = req.body.title
        }
        if (req.body.seasons != null) {
            serie.seasons = req.body.seasons
        }
        if (req.body.availableOn != null) {
            serie.availableOn = req.body.availableOn
        }
        if (req.body.createdAt != null) {
            serie.createdAt = req.body.createdAt
        }
        
        const updatedSerie = await serie.save()
        res.json(updatedSerie)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteOne = async (req, res) => {
    try{    
        const serie = await Serie.findById(req.params.id)
        if(serie == null) {
            return res.status(404).json({message: 'serie nao encontrada'})
        }

        await serie.remove()
        res.json({ message: 'serie deletada com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    create,
    getOne,
    updateOne,
    deleteOne
}