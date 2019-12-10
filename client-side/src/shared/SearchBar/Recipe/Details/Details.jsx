import React from 'react'
import './Details.css';

import recipeSearchService from '../../../../services/recipe-search-service';

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.recipe = this.props.location.state.recipe;
        this.state = {
            recipe: {},
            loading: false
        };
    }

    componentDidMount() {
        recipeSearchService.findRecipeById(this.recipe.id)
            .then(res => this.setState({
                recipe: res,
                loading: true
            }));
    }

    render() {
        const { recipe } = this.state;
        return (
            <div className='container product-details-page'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="item"><img src={recipe.image} /></div>
                    </div>
                    <div className="col-md-6">
                        <h2>{recipe.title}</h2>
                        <hr/>
                        <div className="product-info">
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
                        </div>
                        <hr/>
                        <div className="product-info">
                            <h1>TODO: (add to my to cook list in profile)</h1>
                            <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Ingredients:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data"><i className="far fa-heart"></i> Add to favourites</p>
                            </div>
                            </div>
                            <div className='row'>
                            <div className="col-md-6">
                                <p className="title">Wishlist:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data"><i className="far fa-eye"></i> Add to Watch list</p>
                            </div>
                            </div>
                            <div className='row'>
                            <div className="col-md-6">
                                <p className="title">collection:</p>
                            </div>
                            <div className="col-md-6">
                                <p className="data"><i className="far fa-star"></i> Add to collection</p>
                            </div>
                            </div>
                        </div>
                        <hr/>
                        </div>
                </div>
                <div className="row">
                    <h2>How to cook:</h2>
                    <p>
                        {recipe.instructions}
                    </p>
                </div>
            </div>
        )
    }
    
}

export default Details;