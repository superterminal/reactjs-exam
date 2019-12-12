import React from 'react';
import './MealPlanSearchBar.css';

import { Link } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';
import RecipeCard from '../../shared/SearchBar/Recipe/RecipeCard/RecipeCard';

import recipeSearchService from '../../services/recipe-search-service';

class MealPlanSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealPlan: 'Week',
            targetCalories: 0,
            diet: '',
            excludeProducts: '',
        }
    }

    mealPlanChangeHandler = e => {
        const { value } = e.target;
        this.setState({
            mealPlan: value
        });
    }

    targetCaloriesChangeHandler = e => {
        const { value } = e.target;
        this.setState({
            targetCalories: value
        });
    }

    dietChangeHandler = e => {
        const { value } = e.target;
        this.setState({
            diet: value
        });
    }

    excludeProductsChangeHandler = e => {
        const { value } = e.target;
        this.setState({
            excludeProducts: value
        });
    }

    submitSearch = e => {
        e.preventDefault();
        this.setState({ loading: true }, () => {
            recipeSearchService.generateMealPlan(this.state).then(res => {
              res.length === 0 ? 
                this.setState({ result: {}, message: 'The recipe was not found', loading: false }) 
                : this.setState({ result: res, loading: false });
            }).catch(err => console.error(err));
          });
    }

    render() {
        console.log(this.state);
        return (
            <div className="plan">
                <form className="mealPlanSearch" onSubmit={this.submitSearch}>
                    <p>I want a meal plan for: 
                        <select id="timeFrame" onChange={this.mealPlanChangeHandler}>
                            <option value="week">Week</option>
                            <option value="day">One day</option>
                        </select>
                    </p>
                    <p>
                        My target calories are:  
                        <input type="text" className="targetCalories" placeholder="target calories, ex. 2000" onChange={this.targetCaloriesChangeHandler}/>
                    </p>
                    <p>
                        My diet is: 
                        <select id="diets" onChange={this.dietChangeHandler}>
                            <option>None</option>
                            <option value="Gluten Free">Gluten free</option>
                            <option value="Ketogenic">Ketogenic</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                            <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Pescetarian">Pescetarian</option>
                            <option value="Paleo">Paleo</option>
                            <option value="Primal">Primal</option>
                            <option value="Whole30">Whole30</option>
                        </select>
                        <h6>Don't know your diet? <Link to={{
                            pathname: '/diets',
                            state: { ...this.state }
                        }}>You can check them out here!</Link></h6>
                    </p>
                    <p>
                        I want to exclude: 
                        <input type="text" className="excludeProducts" placeholder="i'm allergic to.., eg. shellfish" onChange={this.excludeProductsChangeHandler}/>
                    </p>
                    <button type="submit" className="searchButton">
                        Get my recipe!
                     </button>
                </form>
            </div>
        )
    }
}

export default MealPlanSearchBar;