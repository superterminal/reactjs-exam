import React from 'react';
import './AdvancedSearchBar.css';
import RecipeCard from '../../shared/SearchBar/Recipe/RecipeCard/RecipeCard';
import Loader from '../../shared/Loader/Loader';
import recipeSearchService from '../../services/recipe-search-service';

class AdvancedSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchBy: 'nutrients',
      nutrient: 'Carbs',
      min: 0,
      max: 0,
      result: {},
      loading: false
    }
  }

  changeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      query: value
    });
  }

  changeSelectHandler = e => {
    const { value } = e.target;
    this.setState({
      searchBy: value
    });
  }

  changeNutrientsHandler = e => {
    const { value } = e.target;
    this.setState({
      nutrient: value
    })
  }

  changeMinHandler = e => {
    const { value } = e.target;
    this.setState({
      min: value 
    });
  }

  changeMaxHandler = e => {
    const { value } = e.target;
    this.setState({
      max: value 
    });
  }

  submitSearch = (e) => {
    e.preventDefault();
    let query = this.state.query;
    let { searchBy } = this.state;
    if (searchBy === 'nutrients') {
      let { nutrient, min, max } = this.state;
      if (min > 0 && max > 0 && max < 101) {
        this.setState({nutrient, min, max, loading: true}, () => {
              recipeSearchService.findByNutrients(nutrient, min, max).then(res => {
                res.length === 0 ? 
                  this.setState({ result: {}, message: 'The recipe was not found', loading: false }) 
                  : this.setState({ result: res, loading: false });
              }).catch(err => console.error(err));
            });
      } else {
        return <h3>Min and max should be more than 0 and max should be less than 100</h3>
      }
    } else {
        this.setState({query, loading: true}, () => {
          recipeSearchService.findByIngredients(query).then(res => {
            res.length === 0 ? 
              this.setState({ result: {}, message: 'The recipe was not found', loading: false }) 
              : this.setState({ result: res, loading: false });
          }).catch(err => console.error(err));
        });
    }
  }
  
  renderSearchResult = () => {
    let { result } = this.state;
    if (Object.keys(result).length) {
      return (result.map(result => <RecipeCard key={result.id} recipe={{...result, nutrient: this.state.nutrient}} />))
    }
  }

  render() {
    return (
      <div>
        <form className="search" onSubmit={this.submitSearch}>
            <h3>I am searching for recipe by: </h3>
            <select id="searchBy" onChange={this.changeSelectHandler}>
              <option value="nutrients">Nutrients</option>
              <option value="products">Products</option>
            </select>
            <br/>
            {this.state.searchBy === 'nutrients' ? 
              <React.Fragment>
              <select id="nutrients" onChange={this.changeNutrientsHandler}>
                <option value="Carbs">Carbs</option>
                <option value="Protein">Protein</option>
                <option value="Calories">Calories</option>
                <option value="Fat">Fat</option>
                <option value="Caffeine">Caffeine</option>
                <option value="Cholesterol">Cholesterol</option>
                <option value="Calcium">Calcium</option>
              </select>
              <input type="text" className="min" placeholder="min 0" name="min" onChange={this.changeMinHandler}/>
              <input type="text" className="max" placeholder="max 100" name="max" onChange={this.changeMaxHandler}/>
              </React.Fragment>
            : 
              <React.Fragment>
                <input type="text" className="searchTerm" placeholder="eg. apples, carrots, beef" onChange={this.changeHandler}/>
                <h5>Products must be separated by comma</h5>
              </React.Fragment>
              }
            
            <br/>
            <button type="submit" className="searchButton">
              Search
            </button>
        </form>
        {this.state.message ? <h2>{this.state.message}</h2> : null}
        {this.state.loading ? <Loader /> : <div className="recipies">        
          {this.renderSearchResult()} 
        </div>}
      </div>
  );
  }  
}

export default AdvancedSearchBar;