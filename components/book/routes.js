const express = require('express')
const router = express.Router()
const { getAllBook } = require('./actions')
const { getIdBook } = require('./actions')
const { createBook } = require('./actions')
const { updateBook } = require('./actions')
const { deleteBook } = require('./actions')


// GET ALL
router.get('/', getAllBook)

// GET by ID
router.get('/:id', getIdBook)

// POST Create a Book
router.post('/', createBook)

// PUT Update a Book's info
router.put('/:id', updateBook)

// DELETE by ID
router.delete('/:id',deleteBook)

module.exports = router
