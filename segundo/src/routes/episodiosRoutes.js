const express = require('express')
const router = express.Router()
const Episodio = require('../models/episodio')

//listar todos os episodios
router.get('/', async (req, res) => {
    try {
        const episodios = await Episodio.find()
        res.json(episodios)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//listar um episodio
router.get('/:id', getEpisode, (req, res) =>{
    res.json(res.episodio)
})

//cadastrar um episodio
router.post('/', async (req, res) =>{
    const episodio = new Episodio({
        nome: req.body.nome,
        descricao: req.body.descricao,
        convidada: req.body.convidada,
        link: req.body.link,
        criadoEm: req.body.criadoEm
    })
    try {
        const novoEpisodio = await episodio.save()
        res.status(201).json(novoEpisodio)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//alterar uma informação especifica em um episodio
router.patch('/:id', getEpisode, async (req, res) =>{
    if (req.body.nome != null) {
        res.episodio.nome = req.body.nome
    }
    if (req.body.descricao != null) {
        res.episodio.descricao = req.body.descricao
    }
    if (req.body.convidada != null) {
        res.episodio.convidada = req.body.convidada
    }
    if (req.body.link != null) {
        res.episodio.link = req.body.link
    }
    try {
        const episodioAtualizado = await res.episodio.save()
        res.json(episodioAtualizado)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//remover um episodio
router.delete('/:id', getEpisode, async (req, res)=> {
    try { 
        await res.episodio.remove()
        res.json({ message: 'Deletado com sucesso!'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Middleware

async function getEpisode(req, res, next) {
    let episodio
    try {
        episodio = await Episodio.findById(req.params.id)
        if (episodio == null) {
            return res.status(404).json({ message: 'Episodio não encontrado'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    res.episodio = episodio
    next()
}


module.exports = router