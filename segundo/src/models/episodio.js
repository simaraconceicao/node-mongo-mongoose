const mongoose = require('mongoose')

const episodioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    convidada: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    criadoEm:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Episodio', episodioSchema)