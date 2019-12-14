const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        const recipeId = req.params.id;
        models.Comment.find({ recipeId })
            .then(comment => res.send(comment))
            .catch(next);
    },
    getAllCommentsByUserIdPlsWork420Blazeit: (req, res, next) => {
        const { _id } = req.user;
        models.Comment.findAll({ user: _id})
            .then(comment => res.send(comment))
            .catch(next);
    },
    post: (req, res, next) => {
        const { recipeId, comment } = req.body;
        const { _id } = req.user;
        models.Comment.create({ comment, recipeId, user: _id })
            .then(comment => {
                console.log('Recipe added!!!')
            }).catch(next);
    },
    delete: (req, res, next) => {
        const recipeId = req.params.id;
        const userId = req.user._id;
        models.Comment.findOneAndDelete({ recipeId, user: userId })
            .then(deletedRecipe => {
                console.log('Comment deleted!!');
                res.send(deletedRecipe);
            }).catch(next);
    },
    put: (req, res, next) => {
        const { recipeId, comment }  = req.params;
        const userId = req.user._id;
        models.Comment.findOneAndUpdate({ comment, recipeId, user: userId })
            .then(updated => {
                console.log('Comment updated???420');
            }).catch(next);
    },
}