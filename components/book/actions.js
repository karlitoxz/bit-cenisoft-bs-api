const Book = require('./model')

//Get ALL
const getAllBook = ('/', async(req, res) => {
  const book = await Book.find();
  res.status(200).send(book);
})

//Get by ID
const getIdBook = ('/:id', async(req, res) => {
  const book = await Book.findById(req.params.id)
  res.status(200).send(book);
})


//POST Create a Book
const createBook = (req, res) => {
  const newBook = new Book(req.body)
  newBook.save((error, bookSaved) => {
    if (error) {
      console.error('Error saving book ', error)
      res.status(500).send(error)
    } else {
      res.status(201).send(bookSaved)
    }
  })
}

//Put Update a Book
const updateBook = async(req, res) => {
  const id = req.params.id;
  const book = await Book.findByIdAndUpdate(id, req.body, (err, post) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(201).json({post});
  });
}

//DELETE by ID
const deleteBook = ('/:id', async(req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id)
  res.status(200).json({"message":"the book has been deleted"});
})

module.exports = { createBook, getAllBook, getIdBook, updateBook, deleteBook }
