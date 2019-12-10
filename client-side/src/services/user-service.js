const userService = {
    logout: function() {
        return fetch(`http://localhost:9999/api/user/logout`, {
            method: 'POST',
            credentials: 'include'
          }).then(res => res.text());
    }
}

export default userService;

