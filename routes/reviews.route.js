const {Router} = require('express');
const {reviewscontroller} = require('../controllers/reviews.controller')
const router = Router();


router.post('/reviews', reviewscontroller.createGenre);

router.delete('/reviews/:id', reviewscontroller.deleteReviewById);

router.get('/reviewsbook', reviewscontroller.getReviewByBook);


module.exports = router;