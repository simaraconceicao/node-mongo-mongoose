const Book =  require('../models/book')

const getAll = async (req, res) => {
    const books = await Book.find()
    res.json(books)
}

const createABook = async (req, res) => {
    const book = new Book({
        title : req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        genre: req.body.genre,
        created_at: req.body.created_at
    })
    try {
        const newBook = await book.save()
        res.status(200).json(newBook)
    }catch (err) {
        res.status(400).json({message: err.message})
    }
    
}

const getOne = async (req, res) => {
    try {  
        const book = await Book.findById(req.params.id)
        if (book == null) {
            return res.status(404).json({message: 'Cannot find this book!'})
        }
        res.json(book)
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
}

const updateOne = async (req, res) => {
    try {  
        const book = await Book.findById(req.params.id)
        if (book == null) {
            return res.status(404).json({message: 'Cannot find this book!'})
        }
        if (req.body.title != null) {
            book.title = req.body.title
        }
        if (req.body.author != null) {
            book.author = req.body.author
        }
        if (req.body.pages != null) {
            book.pages = req.body.pages
        }
        if (req.body.genre != null) {
            book.genre = req.body.genre
        }
        if (req.body.created_at != null) {
            book.created_at = req.body.created_at
        }

        const updatedBook = await book.save()
        res.json(updatedBook)
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
}

const removeOne = async (req, res) => {
    try {  
        const book = await Book.findById(req.params.id)
        if (book == null) {
            return res.status(404).json({message: 'Cannot find this book!'})
        }
        
        await book.remove()
        res.json({ message: 'Book deleted'})
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
}

module.exports = {
    getAll,
    createABook,
    getOne,
    updateOne,
    removeOne
}