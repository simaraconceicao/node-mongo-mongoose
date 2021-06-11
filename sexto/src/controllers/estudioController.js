const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

const getAll = async (req, res) => {
    const estudios = await Estudio.find()
    res.json(estudios)
}

const create =  async (req,res) => {

    const estudio = new Estudio({
        _id:  new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    })
    
    const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})

    if (estudioJaExiste) {
        return res.status(400).json({error: 'Estudio já cadastrado.'})
    }

    try { 
        const novoEstudio = await estudio.save()
        res.status(201).json(novoEstudio)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getOne = async (req, res) => {
    try {
        const estudio = await Estudio.findById(req.params.id)
        if(estudio == null) {
            return res.status(404).json({message: 'estudio nao encontrado'})
        }
        res.json(estudio)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const updateOne = async (req, res) => {
    try {
        const estudio = await Estudio.findById(req.params.id)
        if(estudio == null) {
            return res.status(404).json({message: 'serie nao encontrada'})
        }
        
        if (req.body.nome != null) {
            estudio.title = req.body.nome
        }
    
        if (req.body.criadoEm != null) {
            estudio.criadoEm = req.body.criadoEm
        }
        
        const estudioAtualizado = await estudio.save()
        res.json(estudioAtualizado)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteOne = async (req, res) => {
    try{    
        const estudio = await Estudio.findById(req.params.id)
        if(estudio == null) {
            return res.status(404).json({message: 'serie nao encontrada'})
        }

        await estudio.remove()
        res.json({ message: 'estudio deletado com sucesso!'})
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