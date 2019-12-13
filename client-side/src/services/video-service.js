const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

const videoService = {
      getVideos: function (query) {
        console.log('getVideos');
        return fetch(`https://api.spoonacular.com/food/videos/search?query=${query}&apiKey=${apiKey}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json());
      }
  };
  
  export default videoService;