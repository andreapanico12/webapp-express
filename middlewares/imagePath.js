const setImagePath = (req, res, next) => {

  req.imagePath = `${req.protocol}://${req.get("host")}/images/movies/`;

  next();
};

module.exports = setImagePath;
