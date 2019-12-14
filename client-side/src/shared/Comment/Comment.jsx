import React, { useState } from 'react';
import './Comment.css';

import commentService from '../../services/comment-service';
import Comments from '../Comments/Comments';

function Comment(props) {

    const [comment, setComment] = useState('');

    const submitComment = e => {
        e.preventDefault();
        commentService.addComment({ comment, recipeId: props.recipeId })
            .then(res => console.log('Comment added!'))
            .catch(err => console.log(err));
        
    } 

    return (
        <form onSubmit={submitComment}>
            <div className="addComment">
                <hr />
                <h4>Drop a comment here !</h4>
                <textarea onChange={(e) => setComment(e.target.value)}>
                </textarea><br/>
                <button type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}

export default Comment;
