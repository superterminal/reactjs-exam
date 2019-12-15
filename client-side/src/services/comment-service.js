const commentService = {
    getAllByUser: function () {
        return fetch(`http://localhost:9999/api/comment`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    },
    getAllComments: function (id) {
        return fetch(`http://localhost:9999/api/comment/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    },
    addComment: function (comment) {
        return fetch('http://localhost:9999/api/comment', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    },
    editComment: function (comment, id) {
        return fetch(`http://localhost:9999/api/comment/${id}`, {
            method: 'PUT',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    },
    deleteComment: function (commentId) {
        return fetch(`http://localhost:9999/api/comment/${commentId}`, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json())
        .catch(err => console.error(err));
    }
}

export default commentService;