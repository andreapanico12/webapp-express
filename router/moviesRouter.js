const express = require(`express`);
const router = express.Router();

const moviesController = require(`../controller/moviesController`);

// index
router.get(`/`, moviesController.index);

// show
router.get(`/:id`, moviesController.show);

// post-review
router.post(`/:id/reviews`,moviesController.reviewsStore);

module.exports = router;