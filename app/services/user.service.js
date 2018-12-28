import API_URL from '../utils';

export function login (username, password){

    var request = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({ username, password }) 
    };

    return fetch(`${API_URL}/user/authenticate`, request)
        .then(handleResponse)
        .then(user => {
            
            if(user.token){
                localStorage.setItem(user, JSON.stringify(user));
            }
            return user;
        });
}

export function logout(){
    localStorage.removeItem('user');
}

export function register(user){
    var request = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user)
    };

    return fetch(`${API_URL}/user/register`, request).then(handleResponse);
}

export function deleteUser(id){
    var request = {
        method : 'DELETE',
        headers : null
    }

    return fetch(`${API_URL}/user/${id}`, request).then(handleResponse);
}


function handleResponse(res){

    return res.text().then(text => {
        const data = text.JSON.parse(text);
        if(!res.ok){
            if(res.status == 401){
                logout();
                location.reload(true);
            }

            let error = (data && data.message) || res.statusText;
            return Promise.reject(error);
        }

        return data;
    })

}