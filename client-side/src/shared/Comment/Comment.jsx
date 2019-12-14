import React, { useState } from 'react';

import commentService from '../../services/comment-service';

function Comment(props) {

    const [comment, setComment] = useState('');

    const submitComment = e => {
        e.preventDefault();
        commentService.addComment({ comment, recipeId: props.recipeId })
            .then(res => console.log('added comment'))
            .catch(err => console.log(err));
    } 

    return (
        <form onSubmit={submitComment}>
            <textarea onChange={(e) => setComment(e.target.value)}>
            </textarea>
            <button type="submit">
                Add
            </button>
        </form>
    )
}

export default Comment;
