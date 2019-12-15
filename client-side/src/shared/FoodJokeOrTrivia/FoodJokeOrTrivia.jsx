import React, { useState, useEffect } from 'react';
import './FoodJokeOrTrivia.css';

import foodService from '../../services/food-service';

function FoodJokeOrTrivia(props) {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        foodService.foodJokeOrTrivia(props.opt)
            .then(res => {
                setJoke(res.text);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return loading ? <div>Loading joke hehe...</div> : <h5>{joke}</h5>;
}

export default FoodJokeOrTrivia;