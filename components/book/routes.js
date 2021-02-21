const express = require('express')
const router = express.Router()
const multer = require('multer')
var path = require('path')

const { getAllBook } = require('./actions')
const { getIdBook } = require('./actions')
const { createBook } = require('./actions')
const { updateBook } = require('./actions')
const { deleteBook } = require('./actions')

const storage = multer.diskStorage({
    destination: './covers/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const coverUploader = multer({
    storage: storage,
    dest: './covers/'
})

const setCover = require('../../middlewares/setCover')

// GET ALL
router.get('/', getAllBook)

// GET by ID
router.get('/:id', getIdBook)

// POST Create a Book
router.post('/', coverUploader.single('cover'), setCover, createBook)

// PUT Update a Book's info
router.put('/:id', coverUploader.single('cover'), setCover, updateBook)

// DELETE by ID
router.delete('/:id',deleteBook)

module.exports = router
