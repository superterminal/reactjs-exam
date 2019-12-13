const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const recipeId = req.params.id;
        const { _id } = req.user;
        models.Recipe.find({ recipeId, user: _id })
            .then(recipe => res.send(recipe))
            .catch(next);
    },
    getAll: (req, res, next) => {
        const { _id } = req.user;
        models.Recipe.find({ user: _id})
            .then(recipe => res.send(recipe))
            .catch(next);
    },
    post: (req, res, next) => {
        const { name, recipeId } = req.body;
        const { _id } = req.user;
        models.Recipe.create({ name, recipeId, user: _id })
            .then(recipe => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { recipeCollection: recipe }}),
                    models.Recipe.findOne({ _id: recipe._id })
                ]);
            }).then(([modObj, recipeObj]) => {
                res.send(recipeObj);
            }).catch(next);
    },
    delete: (req, res, next) => {
        const comicId = req.params.id;
        const userId = req.user;
        models.Recipe.findOneAndDelete({ comicId, user: userId })
            .then(deletedRecipe => {
                models.User
                    .updateOne({ _id: userId }, { $pull: { recipeCollection: deletedRecipe._id }})
                    .catch(err => console.error(err));
                res.send(deletedRecipe);
            }).catch(next);
    }
}