const express = require('express');
const router = express.Router();
const { getAllBooks, searchBooks } = require('../controllers/bookController');
const { getReviews } = require('../controllers/reviewController');

router.get('/', getAllBooks);
router.get('/search', searchBooks);
router.get('/:isbn/reviews', getReviews);

module.exports = router;