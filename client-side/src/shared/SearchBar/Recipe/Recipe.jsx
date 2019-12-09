import React from 'react';
import './Recipe.css';
import Link from '../../Link/Link';

function Recipe(recipe) {
    recipe = recipe.recipe;
    console.log(recipe);
    return (
        <div className="card">
            <img src={recipe.image} alt="Denim Jeans"/>
            <h1>{recipe.label}</h1>
            <p>Calories: {recipe.calories}</p>
            <Link to={{
                    pathname: `/recipe/${recipe.uri.split('#')[1]}`,
                    state: { recipe: { ...recipe } }
                }}>Go to recipe</Link>

        </div>
    )
}

export default Recipe;