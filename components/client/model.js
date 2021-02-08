const mongoose = require('mongoose')

const Client = mongoose.model('clients', { name: String, address: String, mobile: String, email: String, password: String })

module.exports = Client

/*
Send postman
{
   "name":"Juan 02",
   "address":"Calle 99 a sur # 99 - 99",
   "mobile":"3138133399",
   "email":"juan@juanserver.com",
   "password":"PassWord 02"
}
*/