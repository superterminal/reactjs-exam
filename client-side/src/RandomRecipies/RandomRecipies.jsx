import React from 'react';
import './RandomRecipies.css';

import recipeSearchService from '../services/recipe-search-service';
import Recipe from '../shared/SearchBar/Recipe/Recipe';

import Loader from '../shared/Loader/Loader';

class RandomRecipies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipies: {},
            loading: true
        }
    }

    componentDidMount() {
        recipeSearchService.getRandomRecipies()
            .then(res => {
                this.setState({
                    recipies: res,
                    loading: false
                });
            });
    }

    renderSearchResult = () => {
        const { recipies } = this.state;
        let results = recipies.recipes;
        if (Object.keys(results).length) {
          return (results.map(result => <Recipe key={result.id} image={result.image} title={result.title} recipe_id={result.id}/>))
        }
      }

    render() {
        if (this.state.loading) {
            return <div className="row" id="loader">
                        <Loader />
                    </div>
        } else {
            return <div className="randomRecipies">
                {this.renderSearchResult()}
            </div>
        }
        
    }
    
}

export default RandomRecipies;