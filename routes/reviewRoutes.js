const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { addReview, updateReview, deleteReview } = require('../controllers/reviewController');

router.post('/:isbn', auth, addReview);
router.put('/:id', auth, updateReview);
router.delete('/:id', auth, deleteReview);

module.exports = router;