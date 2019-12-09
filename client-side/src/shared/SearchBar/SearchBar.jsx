import React from 'react';
import './SearchBar.css';

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
          console.log(res);
        })
      })
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
      </div>
  );
  }  
}

export default SearchBar;