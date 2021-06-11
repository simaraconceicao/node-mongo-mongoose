const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAll = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio') //eager loading
    res.json(titulos)
}

const getAllMarvel = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio') //eager loading
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Marvel")
    res.json(titulosFiltrado)
}

const getAllGhibli = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio') //eager loading
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")
    res.json(titulosFiltrado)
}

const getAllPixar = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio') //eager loading
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
    res.json(titulosFiltrado)
}

const create =  async (req,res) => {
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio,
        criadoEm: req.body.criadoEm
    })

    const tituloJaExiste = await Titulo.findOne({nome: req.body.nome})

    if (tituloJaExiste) {
        return res.status(400).json({error: 'Estudio já cadastrado.'})
    }
    try { 
        const novoTitulo = await titulo.save()
        res.status(201).json(novoTitulo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getOne = async (req, res) => {
    try {
        const titulo = await Titulo.findById(req.params.id)
        if(titulo == null) {
            return res.status(404).json({message: 'titulo nao encontrado'})
        }
        res.json(titulo)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const updateOne = async (req, res) => {
    try {
        const titulo = await Titulo.findById(req.params.id)
        if(titulo == null) {
            return res.status(404).json({message: 'titulo nao encontrado'})
        }
        
        if (req.body.nome != null) {
            titulo.nome = req.body.nome
        }
        if (req.body.genero != null) {
            titulo.genero = req.body.genero
        }
        if (req.body.descricao != null) {
            titulo.descricao = req.body.descricao
        }
        if (req.body.estudio != null) {
            titulo.estudio = req.body.estudio
        }
        if (req.body.criadoEm != null) {
            titulo.criadoEm = req.body.criadoEm
        }
        
        const tituloAtualizado = await titulo.save()
        res.json(tituloAtualizado)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteOne = async (req, res) => {
    try{    
        const titulo = await Titulo.findById(req.params.id)
        if(titulo == null) {
            return res.status(404).json({message: 'titulo nao encontrado'})
        }

        await titulo.remove()
        res.json({ message: 'titulo deletado com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAll,
    getAllMarvel,
    getAllGhibli,
    getAllPixar,
    create,
    getOne,
    updateOne,
    deleteOne,
    
}