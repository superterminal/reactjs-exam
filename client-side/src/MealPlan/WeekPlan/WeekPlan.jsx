import React from 'react';
import './WeekPlan.css';

import { Link } from 'react-router-dom';
import RecipeService from '../../services/recipe-search-service';
import recipeSearchService from '../../services/recipe-search-service';

class WeekPlan extends React.Component {
    constructor(props) {
        super(props);
        this.recipe = this.props.recipe;
        this.recipeValue = JSON.parse(this.recipe.value);
        this.state = {
            imageUrl: '',
            loading: true
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            recipeSearchService.getRecipeImageById(this.recipeValue.id)
                .then(res => this.setState({ imageUrl: res , loading: false}))
                .catch(err => console.log(err));
        })
        
    }

    render() {
        return <div className="card">
               <img src={this.state.imageUrl} alt="recipe" />
                <h1>Day: {this.recipe.day}</h1>
                <span>{this.recipe.slot === 1 ? 'Morning' : (this.recipe.slot === 2 ? 'Lunch' : 'Dinner')}</span>
                <h2>{this.recipeValue.title}</h2>           
                <Link to={{
                    pathname: `/recipe/${this.recipeValue.id}`,
                    state: {
                        recipe: { ...this.recipeValue }
                    }
                }}>Go to recipe</Link>  
         </div>
    }
}

export default WeekPlan;