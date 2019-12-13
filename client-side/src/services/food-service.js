const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

const foodService = {
    foodJokeOrTrivia: function(opt) {
        return fetch(`https://api.spoonacular.com/food/${opt}/random?apiKey=${apiKey}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
              }
        }).then(res => res.json());
    },
}

export default foodService;