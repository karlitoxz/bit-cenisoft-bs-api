const mongoose = require('mongoose')

const Sales = mongoose.model('sales', {date: Date, total: Number, idClient: mongoose.Schema.Types.ObjectId, detail: [{idBook : mongoose.Schema.Types.ObjectId, book: String, valueUnit : Number, quantity : Number}]})

module.exports.Sales = Sales


module.exports = Sales

/*
Send postman
 {
	"date": "1987-10-19",
	"total": 999999,
	"idClient": "60218b9aedca0315f0b46071",
    "detail" : [{
        "idBook": "60218ff1c42f2416a0cb3be5",
        "book": "Nombre del libro",
        "valueUnit": 212,
        "quantity": 2
    }]
}
*/
