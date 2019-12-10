const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

const recipeSearchService = {
    findByQuery: function (query) {
        return fetch(`https://api.spoonacular.com/recipes/search?query=${query}&number=10&apiKey=${apiKey} `, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },
      findRecipeById: function (id) {
        return fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey} `, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      }
  };
  
  export default recipeSearchService;