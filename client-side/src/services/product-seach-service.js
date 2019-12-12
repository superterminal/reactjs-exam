const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

const productService = {
      findProductById: function (id) {
        console.log('findProductById');
        return fetch(`https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      }
  };
  
  export default productService;