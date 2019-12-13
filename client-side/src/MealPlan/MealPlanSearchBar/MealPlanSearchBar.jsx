import React from 'react';
import './MealPlanSearchBar.css';

import { Link } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';
import RecipeCard from '../../shared/SearchBar/Recipe/RecipeCard/RecipeCard';
import WeekPlan from '../WeekPlan/WeekPlan';

import recipeSearchService from '../../services/recipe-search-service';

class MealPlanSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            nutrients: {},
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
                : this.setState({ result: res, nutrients: { ...res.nutrients }, loading: false });
            }).catch(err => console.error(err));
          });
    }

    renderSearchResult = () => {
        let { result } = this.state;
        if (Object.keys(result).length) {
            if (this.state.mealPlan === 'day') {
                return (
                    result.meals.map(result => <RecipeCard key={result.id} recipe={{ ...result }} />)
                )
            } else {
                return (
                    result.items.map(item => <WeekPlan key={JSON.parse(item.value).id} recipe={ item } />
                ));
            }
        }
        
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
                {this.state.loading ? <Loader /> : <div className="recipies">
                    {Object.keys(this.state.nutrients).length !== 0 ? <h5>
                        Calories: {this.state.nutrients.calories}g,
                        Protein: {this.state.nutrients.protein}g,
                        Fat: {this.state.nutrients.fat}g,
                        Carbohydrates: {this.state.nutrients.carbohydrates}g</h5> : null}
                    {this.renderSearchResult()} 
                </div>}
            </div>
        )
    }
}

export default MealPlanSearchBar;