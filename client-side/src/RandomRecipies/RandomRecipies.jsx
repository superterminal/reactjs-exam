import React from 'react';
import './RandomRecipies.css';

import recipeSearchService from '../services/recipe-search-service';
import RecipeCard from '../shared/SearchBar/Recipe/RecipeCard/RecipeCard';

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
        setTimeout(() => {
            recipeSearchService.getRandomRecipies()
            .then(res => {
                this.setState({
                    recipies: res,
                    loading: false
                });
            });
        }, 1000);
    }

    renderSearchResult = () => {
        const { recipies } = this.state;
        let results = recipies.recipes;
        if (Object.keys(results).length) {
          return (results.map(result => <RecipeCard key={result.id}  recipe={result} />))
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