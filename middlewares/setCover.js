
module.exports = (req, res, next) => {
    if (req.file) {
      console.log(req.file)
      destino = 'covers'
      req.body.cover = `${req.protocol}://${req.get("host")}/${destino}/${req.file.filename}`
      next()
    }
  }