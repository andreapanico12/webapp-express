const connection = require(`../data/dbMovies`)

const index = (req,res) => {

  const sql = `SELECT movies.*, ROUND(AVG(reviews.vote)) AS rating       
   FROM movies
   LEFT JOIN reviews ON movies.id = reviews.movie_id
   GROUP BY movies.id`

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
  const sql = `SELECT movies.*, ROUND(AVG(reviews.vote)) AS rating
        FROM movies
        LEFT JOIN reviews ON movies.id = reviews.movie_id
        WHERE movies.id = ?
        GROUP BY movies.id`

  const sqlReviews = `SELECT *
  FROM reviews
  WHERE reviews.movie_id = ?`

  connection.query(sql, [id], (err,results) => {
    if(err) return res.status(500).json({error: `database query failed`})
    if(results.length === 0 || results[id] === null)  return res.status(404).json({error: `movies not found`})

    connection.query(sqlReviews, [id], (err,resultsReviews) => {
      if(err) return res.status(500).json({error: `database query failed`})

        const movie = results[0]
        res.json({
          ...movie,
          image: req.imagePath + movie.image,
          reviews: resultsReviews  
    })  


    })  
  })
};

module.exports = {
  index,
  show,
}