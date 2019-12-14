import React from 'react'
import './RecipeDetails.css';

import recipeSearchService from '../../../../services/recipe-search-service';
import AddButton from '../../../AddButton/AddButton';

import Comment from '../../../Comment/Comment';
import Comments from '../../../Comments/Comments';
import Loader from '../../../Loader/Loader';
import Link from '../../../Link/Link';

class RecipeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.recipe = this.props.location.state.recipe;
        this.recipeId = this.props.location.state.recipeId;
        this.state = {
            recipe: {},
            loading: true,
            comments: {}
        };
    }

    componentDidMount() {
        let id = this.recipe === undefined ? this.recipeId : this.recipe.id;
        recipeSearchService.findRecipeById(id)
            .then(res => this.setState({
                recipe: res,
                loading: false
        }));
    }

    render() {
        const { recipe } = this.state;

        let ingrdientImageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/';

        if (this.state.loading) {
            return <div className="row" id="loader">
                        <Loader />
                    </div>
        } else {
            return <div className='container product-details-page'>
            <div className='row'>
                <div className="col-md-6">
                    <div className="item"><img src={recipe.image} alt="details"/></div>
                </div>
                <div className="col-md-6">
                    <h2>{recipe.title}</h2>
                    <hr/>
                    <div className="product-info">
                        <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Servings:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data"> {recipe.servings}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Cheap:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data"> {recipe.cheap ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Dairy free:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data"> {recipe.dairyFree ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Vegetarian:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data">{recipe.vegetarian ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                        <div className='row'>
                        <div className="col-md-6">
                            <p className="title">Gluten free:</p>
                        </div>
                        <div className="col-md-6">
                            <p className="data"> {recipe.glutenFree ? 'Yes' : 'No'}</p>
                        </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="product-info">
                        <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Diets:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data">{recipe.diets.length ? recipe.diets.join(' | ') : 'This recipe has no diet'}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Cuisines:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data">{recipe.cuisines.length ? recipe.cuisines.join(' | ') : 'This recipe has no cuisines'}</p>
                            </div>
                        </div>
                    </div>
                    <AddButton recipeId={recipe.id} name={recipe.title} />
                    <hr/>
                    </div>
            </div>
            <div className="row">
                <ul className="data" id="ingredients">
                    {console.log(recipe.extendedIngredients)}
                    {recipe.extendedIngredients.map(ing => 
                            <Link to={{
                                pathname: `/product/${ing.id}`,
                                state: {
                                    ingredient: { ...ing }
                                }
                            }} key={ing.id}>
                            {ing.original}
                            <img src={ingrdientImageUrl + ing.image} alt="ingredient" />
                            </Link> 
                    )}
                </ul>
            </div>
            <div id="recipe">
                <h2>How to cook:</h2><br/>
                {recipe.analyzedInstructions.length !== 0 ? recipe.analyzedInstructions[0].steps.map(step => 
                    <div key={step.number}>
                        <h2>Step {step.number}</h2>
                        <h3>Ingredients for this step: </h3>
                        <ul className="data" id="ingredients">
                            {step.ingredients.map(ing => <li key={ing.id}>{ing.name} <img src={ingrdientImageUrl + ing.image} alt="ingredient"/></li>)}
                        </ul>
                        <p>{step.step}</p>
                </div>) : <h3>No steps available :/</h3>}
            </div>
            <Comment recipeId={recipe.id}/>
            <Comments recipeId={recipe.id}/>
        </div>
        }
    }
    
}

export default RecipeDetails;