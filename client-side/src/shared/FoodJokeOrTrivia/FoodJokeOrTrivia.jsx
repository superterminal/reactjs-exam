import React from 'react';
import './FoodJokeOrTrivia.css';

import foodService from '../../services/food-service';

class FoodJokeOrTrivia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            loading: true
        };
    }

    componentDidMount() {
        this.setState({ loading: true}, () => {
            foodService.foodJokeOrTrivia(this.props.opt)
                .then(res => this.setState({ joke: res.text, loading: false }))
                .catch(err => console.log(err));
        })
    }

    render() {
        return this.state.loading ? <div>Loading joke hehe...</div> : <h5>{this.state.joke}</h5>;
    }
}

export default FoodJokeOrTrivia;