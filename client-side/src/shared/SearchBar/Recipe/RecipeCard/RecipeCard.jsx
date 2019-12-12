import React from 'react';
import './RecipeCard.css';

import { Link } from 'react-router-dom';

function Recipe(recipe) {
    recipe = recipe.recipe;

    let imageUrl = !recipe.image.includes('spoonacular') ? 'https://spoonacular.com/recipeImages/' + recipe.image  : recipe.image;
    
    return <div className="card">
            <img src={imageUrl} alt="recipe"/>
            <h2>{recipe.title}</h2>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            <Link to={{
                    pathname: `/recipe/${recipe.id}`,
                    state: { 
                        recipe: { ...recipe }
                    }
                }}>Go to recipe</Link>
        </div>
}

export default Recipe;