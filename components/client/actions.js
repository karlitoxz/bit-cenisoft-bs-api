const Client = require('./model')

//Get ALL
const getAllClient = ('/', async(req, res) => {
  const client = await Client.find();
  res.status(200).send(client);
})

//Get by ID
const getIdClient = ('/:id', async(req, res) => {
  const client = await Client.findById(req.params.id)
  res.status(200).send(client);
})


//POST Create a Client
const createClient = (req, res) => {
  const newClient = new Client(req.body)
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.status(201).send(clientSaved)
    }
  })
}

//Put Update a Client
const updateClient = async(req, res) => {
  const id = req.params.id;
  const client = await Client.findByIdAndUpdate(id, req.body, (err, post) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(201).json({post});
  });
}

//DELETE by ID
const deleteClient = ('/:id', async(req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id)
  res.status(200).json({"message":"the client has been deleted"});
})

module.exports = { createClient, getAllClient, getIdClient, updateClient, deleteClient }
