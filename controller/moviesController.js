const connection = require(`../data/dbMovies`)

const index = (req,res) => {

  const sql = `SELECT * FROM movies`

  connection.query(sql,(err,results)=>{
    if(err) return res.status(500).json({error: `database query failed`})
    res.json(results)  
  })
  
};

const show = (req,res) =>{
  const id = req.params.id;
  res.send(`showing the movie with id ${id}`)
};

module.exports = {
  index,
  show,
}