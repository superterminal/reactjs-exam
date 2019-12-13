const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.recipe.getAll);

router.get('/:id', auth(), controllers.recipe.get);

router.post('/', auth(), controllers.recipe.post);

router.delete('/:id', auth(), controllers.recipe.delete);

module.exports = router;