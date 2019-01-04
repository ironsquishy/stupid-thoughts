import Utils from '../utils';

export function login (username, password){

    var request = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({ username, password }) 
    };

    return fetch(`${Utils.API_URL}/user/authenticate`, request)
        .then(handleResponse)
        .then(user => {
            
            if(user.token){
                localStorage.setItem(user, JSON.stringify(user));
            }
            return user;
        }).catch(handleError);
}

export function logout(){
    localStorage.removeItem('user');
}

export function register(user, password){
    var request = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({username : user, password : password})
    };

    return fetch(`${Utils.API_URL}/user/register`, request).then(handleResponse);
}

export function deleteUser(id){
    var request = {
        method : 'DELETE',
        headers : null
    }

    return fetch(`${Utils.API_URL}/user/${id}`, request).then(handleResponse);
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

function handleError(err){
    
    return Promise.reject('Unable to connect to server...');
}