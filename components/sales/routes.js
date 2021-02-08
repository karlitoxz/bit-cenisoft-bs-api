const express = require('express')
const router = express.Router()
const { getAllSales } = require('./actions')
const { getIdSales } = require('./actions')
const { createSales } = require('./actions')
const { updateSales } = require('./actions')
const { deleteSales } = require('./actions')


// GET ALL
router.get('/', getAllSales)

// GET by ID
router.get('/:id', getIdSales)

// POST Create a Sales
router.post('/', createSales)

// PUT Update a Sales's info
router.put('/:id', updateSales)

// DELETE by ID
router.delete('/:id',deleteSales)

module.exports = router
