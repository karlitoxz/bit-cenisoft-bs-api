const mongoose = require('mongoose')

const Book = mongoose.model('books', {cover: String, name: String, description: String, unitValue : Number, category : Array})

module.exports = Book

/*
Send postman
{
	"cover": [file],
	"name": "Nombre del libro 01",
	"description": "Descripcion 01",
	"unitValue": 1111,
	"category": [{
		"cat01": "Categoria 01",
		"cat02": "Categoria 02"
	}]
}
*/