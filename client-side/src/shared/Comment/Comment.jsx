import React, { useState } from 'react';
import './Comment.css';

import commentService from '../../services/comment-service';
import RenderComment from '../RenderComment/RenderComment';

function Comment(props) {

    const [comment, setComment] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    const submitComment = e => {
        e.preventDefault();
        commentService.addComment({ comment, recipeId: props.recipeId });
        setIsAdded(true);
    } 

    return (
        <React.Fragment>
            {!isAdded ? 
            <form onSubmit={submitComment}>
                <div className="addComment">
                    <hr />
                    <h4>Drop a comment here !</h4>
                    <textarea onChange={(e) => setComment(e.target.value)}>
                    </textarea><br/>
                    {comment === '' ? <h5>Comment field must not be empty!</h5> : 
                        <button type="submit">
                            Add Comment
                        </button>
                    }
                </div>
            </form> : 
            <React.Fragment>
                <h4>Comment added!</h4>
                <RenderComment comment={comment} />
            </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Comment;
