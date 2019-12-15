const collectionService = {
    getRecipe: function (id) {
        return fetch(`http://localhost:9999/api/recipe/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    },
    getAllRecipies: function () {
        return fetch(`http://localhost:9999/api/recipe`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    },
    addToCollection: function (recipe) {
        return fetch('http://localhost:9999/api/recipe', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    },
    deleteFromCollection: function (recipeId) {
        return fetch(`http://localhost:9999/api/recipe/${recipeId}`, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    }
}

export default collectionService;