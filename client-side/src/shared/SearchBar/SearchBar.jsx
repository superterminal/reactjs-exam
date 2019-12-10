import React from 'react';
import './SearchBar.css';
import Recipe from './Recipe/Recipe';

import recipeSearchService from '../../services/recipe-search-service';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      result: {},
      loading: false
    }
  }

  changeHandler = (e) => {
    const query = e.target.value;
    this.setState({
      query,
      result: {},
      loading: false
    });
    
  }

  submitSearch = (e) => {
    e.preventDefault();
    let query = this.state.query;
    if (!query) {
      this.setState({
        query,
        result: {},
        loading: false
      });
    } else {
      this.setState({query, message: '', loading: true}, () => {
        recipeSearchService.findByQuery(query).then(res => {
          res = res.results;
          res.length === 0 ? 
            this.setState({ result: {}, message: 'The recipe was not found' }) 
            : this.setState({ result: res });
        }).catch(err => console.error(err));
      })
    }
  }
  
  renderSearchResult = () => {
    const { result } = this.state;
    if (Object.keys(result).length) {
      console.log(result);
      return result === undefined ? <div>Loading...</div> : (result.map(result => <Recipe key={result.id} recipe={result}/>))
    }
  }

  render() {
    return (
      <div>
        <form className="search" onSubmit={this.submitSearch}>
            <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={this.changeHandler}/>
            <button type="submit" className="searchButton">
              Search
          </button>
        </form>
        <div className="recipies">        
          {this.renderSearchResult()} 
        </div>
      </div>
  );
  }  
}

export default SearchBar;