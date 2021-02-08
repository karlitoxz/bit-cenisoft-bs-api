const Sales = require('./model')

//Get ALL
const getAllSales = ('/', async(req, res) => {
  const sales = await Sales.find();
  res.status(200).send(sales);
})

//Get by ID
const getIdSales = ('/:id', async(req, res) => {
  const sales = await Sales.findById(req.params.id)
  res.status(200).send(sales);
})


//POST Create a Sales
const createSales = (req, res) => {
  const newSales = new Sales(req.body)
  newSales.save((error, saleSaved) => {
    if (error) {
      console.error('Error saving sales ', error)
      res.status(500).send(error)
    } else {
      res.status(201).send(saleSaved)
    }
  })
}

//Put Update a Sales
const updateSales = async(req, res) => {
  const id = req.params.id;
  const sales = await Sales.findByIdAndUpdate(id, req.body, (err, post) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(201).json({post});
  });
}

//DELETE by ID
const deleteSales = ('/:id', async(req, res) => {
  const sales = await Sales.findByIdAndDelete(req.params.id)
  res.status(200).json({"message":"the sales has been deleted"});
})

module.exports = { createSales, getAllSales, getIdSales, updateSales, deleteSales }
