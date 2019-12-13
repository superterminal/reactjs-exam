import React from 'react';
import './MealPlan.css';

import MealPlanSearchBar from './MealPlanSearchBar/MealPlanSearchBar';
import FoodJokeOrTrivia from '../shared/FoodJokeOrTrivia/FoodJokeOrTrivia';

function MealPlan() {
    return <div className="mealPlan">
            <h1>Generate your own meal plan here!</h1>
            <h3>Please check a few params first:</h3>  
            <MealPlanSearchBar />
            {<FoodJokeOrTrivia opt={'jokes'} />}
        </div>
}

export default MealPlan;