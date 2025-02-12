const express = require(`express`);
const app = express();
require(`dotenv`).config();
const port = process.env.PORT || 3000;
const moviesRouter = require(`./router/moviesRouter`);
const cors = require('cors')

app.use(cors({origin:'http://localhost:5173'}))


const errorHandler = require(`./middlewares/errorHandler`);
const notFoundHandler = require(`./middlewares/notFoundHandler`);
const imagePathMd = require(`./middlewares/imagePath`);

app.use(express.static(`public`));

app.use(express.json());

app.use(imagePathMd);

app.get(`/`, (req,res) => {
  res.send(`Server Movies`);
})

app.use(`/api/movies`,moviesRouter);


app.use(errorHandler);
app.use(notFoundHandler);


app.listen(port,() =>{
  console.log(`Listening to port ${port}`);
  
})