import React, { useState } from 'react';

import commentService from '../../services/comment-service';
import Loader from '../Loader/Loader';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            loading: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            commentService.getAllComments(this.props.recipeId)
                .then(res => {
                    this.setState({
                        result: res,
                        loading: false
                    });
                }).catch(err => console.log(err));
        })
    }

    renderSearchResult = () => {
        const { result } = this.state; // check for message?
        if (Object.keys(result).length) {
            console.log(result[0].comment);
        }
    }

    render() {
        return (
            <div>
                {this.state.loading ? <Loader /> : this.renderSearchResult()}
            </div>
        )
    }
}

export default Comments;
