const notFoundHandler = (req,res) =>{
  res.status(404);
  res.json({
    message: `Oggetto non trovato`,
    status: 404,
    error: `Not Found`
  })
}

module.exports = notFoundHandler;