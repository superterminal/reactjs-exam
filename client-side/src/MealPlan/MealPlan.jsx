import React from 'react';
import './MealPlan.css';

import MealPlanSearchBar from './MealPlanSearchBar/MealPlanSearchBar';

function MealPlan() {
    return <div className="mealPlan">
            <h1>Generate your own meal plan here!</h1>
            <h3>Please check a few params first:</h3>  
            <MealPlanSearchBar />
        </div>
}

export default MealPlan;