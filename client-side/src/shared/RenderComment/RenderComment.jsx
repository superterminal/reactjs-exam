import React from 'react';
import './RenderComment.css';

function RenderComment(comment) {
    let validComment = typeof Object.entries(comment)[0][1] === 'string' ? comment.comment : comment.comment.comment;
    return (   
        <div className="row">
            <h2>Comment: </h2>
            <h2 className="content">{validComment}</h2>
        </div>
    )
}

export default RenderComment;