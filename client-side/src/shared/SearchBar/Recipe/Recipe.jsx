import React from 'react';
import './Recipe.css';
import Link from '../../Link/Link';

import recipeSearchService from '../../../services/recipe-search-service';

class Recipe extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            recipe: {},
            loading: true,
        }
    }

    componentDidMount() { 
        console.log(this.props);
        if (this.props.recipe_id !== undefined) {
            recipeSearchService.findRecipeById(this.props.recipe_id)
            .then(res => this.setState({
                recipe: res,
                loading: false
            }));
        }
    }

    render() {
        let { recipe, image, title, recipe_id } = this.props;
        if (recipe !== undefined) {
            let imageUrl = 'https://spoonacular.com/recipeImages/' + recipe.image;
            return (
                <div className="card">
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
            )
        } else {
            return (
                <div className="card">
                    <img src={image} alt="recipe"/>
                    <h2>{title}</h2>
                    <Link to={{
                            pathname: `/recipe/${recipe_id}`,
                            state: { 
                                recipe: { ...this.state.recipe }
                            }
                        }}>Go to recipe</Link>
                </div>
            )
        }
    }
    
}

export default Recipe;