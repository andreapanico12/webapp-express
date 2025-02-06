const express = require(`express`);
const app = express();
require(`dotenv`).config();
const port = process.env.PORT || 3000;


const errorHandler = require(`./middlewares/errorHandler`);
const notFoundHandler = require(`./middlewares/notFoundHandler`);

app.use(express.static(`public`));

app.use(express.json());

app.get(`/`, (req,res) => {
  res.send(`Server Movies`);
})

app.use(errorHandler);
app.use(notFoundHandler);


app.listen(port,() =>{
  console.log(`Listening to port ${port}`);
  
})