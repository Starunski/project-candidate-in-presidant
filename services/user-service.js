const userService = (function () {

    function getAllUsers() {

        var opts = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer _WprxQEHuNUhg9ymuxGvP9ZLvHv434Dtqokp'
            }
        };

        return fetch('https://gorest.co.in/public-api/users', opts).then(response => response.json()).then(response => response.result);
    }

    return {
        getAll: getAllUsers
    }
})()


// const userService = {
//     get: function () {
//         return {
//             name: 'Ivan'
//         }
//     }
// }