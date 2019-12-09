const appId = process.env.REACT_APP_RECIPE_SEARCH_APP_ID;
const appKey = process.env.REACT_APP_RECIPE_SEARCH_APP_KEY;

const recipeSearchService = {
    findByQuery: function (query) {
      return fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json());
    },
  };
  
  export default recipeSearchService;