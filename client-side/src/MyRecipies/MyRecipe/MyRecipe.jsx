import React from 'react';
import { Link } from 'react-router-dom';

function MyRecipe(recipe) {
    recipe = recipe.recipe;
    return <Link to={{ pathname: `/recipe/${recipe.recipeId}`, 
        state: { 
            recipeId: recipe.recipeId 
        } }}><h3>{recipe.name}</h3></Link>
}

export default MyRecipe;