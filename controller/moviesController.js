const connection = require(`../data/dbMovies`)

const index = (req,res) => {

  const sql = `SELECT * FROM movies`

  connection.query(sql,(err,results)=>{
    if(err) return res.status(500).json({error: `database query failed`})
    
     const movies = results.map(movie => {
      return {
        ...movie,
        image: req.imagePath + movie.image
      }
     }) 
     res.json(movies);
     
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