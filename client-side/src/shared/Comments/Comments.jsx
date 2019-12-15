import React, { useState, useEffect } from 'react';
import './Comments.css';

import commentService from '../../services/comment-service';
import Loader from '../Loader/Loader';
import RenderComment from '../RenderComment/RenderComment';


function Comments(props) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        commentService.getAllComments(props.recipeId)
            .then(res => {
                setComments(res);
                setLoading(false);
        }).catch(err => console.log(err)); 
    }, [props.recipeId]);

    const renderSearchResult = () => {
        return <div className="comments">
            {/* <h2>All comments for this recipe: </h2> */}
            {comments.map(comment => <RenderComment key={comment._id} comment={{...comment}} />)}
        </div>
    }

    return (
        <div>
            {loading ? <Loader /> : renderSearchResult()}
        </div>
    )
}

export default Comments;
