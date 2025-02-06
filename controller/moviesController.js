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
  const sql = `SELECT *
  FROM movies
  WHERE movies.id =?`

  connection.query(sql, [id], (err,results) => {
    if(err) return res.status(500).json({error: `database query failed`})
    if(results.length === 0 || results[id] === null)  return res.status(404).json({error: `movies not found`})

    const movie = results[0]
    res.json({
      ...movie,
      image: req.imagePath + movie.image
    })  
  })
};

module.exports = {
  index,
  show,
}