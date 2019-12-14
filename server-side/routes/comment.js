const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.comment.getAllCommentsByUserIdPlsWork420Blazeit);

router.get('/:id', auth(), controllers.comment.getAll);

router.post('/', auth(), controllers.comment.post);

router.put('/:id', auth(), controllers.comment.put);

router.delete('/:id', auth(), controllers.comment.delete);

module.exports = router;