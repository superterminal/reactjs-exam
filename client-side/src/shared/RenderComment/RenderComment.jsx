import React from 'react';
import './RenderComment.css';

function RenderComment(comment) {

    return (
        <div className="row">
            <h2>Comment: </h2>
            <h2 className="content">{comment.comment.comment}</h2>
        </div>
    )
}

export default RenderComment;