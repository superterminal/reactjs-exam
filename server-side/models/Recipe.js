const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const recipeSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    recipeId: {
        type: String,
        required: true
    }
});

module.exports = new Model('Recipe', recipeSchema);