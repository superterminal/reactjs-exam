import React from 'react';
import './Recipe.css';
import Link from '../../Link/Link';

function Recipe(recipe) {
    recipe = recipe.recipe;
    let imageUrl = 'https://spoonacular.com/recipeImages/' + recipe.image;
    return (
        <div className="card">
            <img src={imageUrl} />
            <h2>{recipe.title}</h2>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            <Link to={{
                    pathname: `/recipe/${recipe.id}`,
                    state: { 
                        recipe: { ...recipe }
                    }
                }}>Go to recipe</Link>

        </div>
    )
}

export default Recipe;