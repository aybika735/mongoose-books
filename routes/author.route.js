const {Router} = require('express');
const {authorcontroller} = require('../controllers/author.controller')
const router = Router();


router.post('/author', authorcontroller.createAuthor);

router.delete('/author/:id', authorcontroller.deleteAuthorById);

router.patch('/author/:id', authorcontroller.changeAuthorById);
router.get('/author/:id', authorcontroller.getAuthorById);
router.get('/author', authorcontroller.getAuthors);


module.exports = router;