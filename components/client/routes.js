const express = require('express')
const router = express.Router()
const { getAllClient } = require('./actions')
const { getIdClient } = require('./actions')
const { createClient } = require('./actions')
const { updateClient } = require('./actions')
const { deleteClient } = require('./actions')


// GET ALL
router.get('/', getAllClient)

// GET by ID
router.get('/:id', getIdClient)

// POST Create a Client
router.post('/', createClient)

// PUT Update a Client's info
router.put('/:id', updateClient)

// DELETE by ID
router.delete('/:id',deleteClient)

module.exports = router
