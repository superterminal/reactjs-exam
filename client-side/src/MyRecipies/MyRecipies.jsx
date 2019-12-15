import React, { useState, useEffect } from 'react';
import './MyRecipies.css';

import collectionService from '../services/collection-service';
import AddButton from '../shared/AddButton/AddButton';
import MyRecipe from './MyRecipe/MyRecipe';
import Loader from '../shared/Loader/Loader';

function MyRecipies() {

    let [recipies, setRecipies] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('one time')
        collectionService.getAllRecipies()
            .then(res => {
                setRecipies(res)
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    return <div className="my-collection">
        <h1>My collection</h1>
        {recipies.length ? (loading ? <Loader /> : recipies.map(recipe => {
            return <div key={recipe._id}>
                        <MyRecipe recipe={recipe} />
                        <AddButton recipeId={recipe.recipeId} />
            </div>
        })) : <h2>Your recipe list is empty :/</h2>}
        {}
    </div>
}

export default MyRecipies;