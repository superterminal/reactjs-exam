import React, { useState, useEffect } from 'react';

import collectionService from '../services/collection-service';

function MyRecipies() {

    let [recipies, setRecipies] = useState([]);

    useEffect(() => {
        collectionService.getAllRecipies()
            .then(res => setRecipies(res))
            .catch(err => console.error(err));
    })

    return <div className="my-collection">
        <h1>My collection</h1>
        {/* {recipies.length ? recipies.map(recipe => <RecipeRender recipe={recipe}/>) : null} */}
        {recipies.length ? recipies.map(recipe => <h3>{recipe.name}</h3>) : null}
    </div>
}

export default MyRecipies;