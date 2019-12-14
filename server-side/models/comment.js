const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const commentSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    recipeId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true,
    }
});

module.exports = new Model('Comment', commentSchema);