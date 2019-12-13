const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

const recipeSearchService = {
    findByQuery: function (query) {
        console.log('findByQuery');
        return fetch(`https://api.spoonacular.com/recipes/search?query=${query}&number=10&apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },
      findByNutrients: function (nutrient, min, max) {
        console.log('findByNutrients');
        let minNutrient = 'min' + nutrient;
        let maxNutrient = 'max' + nutrient;
        return fetch(`https://api.spoonacular.com/recipes/findByNutrients?${minNutrient}=${+min}&${maxNutrient}=${+max}&apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },
      findByIngredients: function (query) {
        console.log('findByIngrdients')
        return fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },
      findRecipeById: function (id) {
        console.log('findRecipeById')
        return fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },
      getRandomRecipies: function () {
        return fetch(`https://api.spoonacular.com/recipes/random?number=9&apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },
      generateMealPlan: function(params) {

        let baseUrl = 'https://api.spoonacular.com/recipes/mealplans/generate?';
        let { mealPlan, targetCalories, diet, excludeProducts } = params;
        baseUrl = baseUrl + 'timeFrame=' + (mealPlan === 'day' ? 'day' : 'week');
        if (targetCalories !== 0) {
          baseUrl += '&targetCalories=' + targetCalories;
        }
        if (diet) {
          baseUrl += '&diet=' + diet.toLowerCase();
        } 
        if (excludeProducts) {
          baseUrl += '&exclude=' + excludeProducts;
        }
      
        return fetch(`${baseUrl}&apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      },
      getRecipeImageById: function(id) {
        return fetch(`https://spoonacular.com/recipeImages/${id}-556x370.jpg?apiKey=${apiKey}`, {
          method: 'GET',
        }).then(res => res.blob())
          .then(image => image = URL.createObjectURL(image));
      }
  };
  
  export default recipeSearchService;