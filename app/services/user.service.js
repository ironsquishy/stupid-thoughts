import Utils from '../utils';

import queryString from 'query-string';

export function GetCurrentUser(){
    const request = {
        method : 'GET',
        headers : Utils.AuthHeader()
    };
    
    return fetch(`${Utils.API_URL}/user/current`, request)
    .then(handleResponse)
    // .then(user => {
    //         return user
    // })
    .catch(handleError);
    
}

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
                sessionStorage.setItem('stupidToken', JSON.stringify(user.token));
            }
            return user;
        }).catch(handleError);
}

export function logout(){
    console.log('User successfully logged out');
    sessionStorage.removeItem('stupidToken');
}

export function register(user, password){
    var request = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({username : user, password : password})
    };

    return fetch(`${Utils.API_URL}/user/register`, request)
        .then(handleResponse)
        .then(user => {
            if(user.token){
                sessionStorage.setItem('stupidToken', JSON.stringify(user.token));
            }
            return user;
        })
        .catch(handleError);
}

export function deleteUser(id){
    var request = {
        method : 'DELETE',
        headers : null
    }

    return fetch(`${Utils.API_URL}/user/${id}`, request).then(handleResponse);
}

export function checkNameAvailable(username){
    var request = {
        method : 'GET',
        headers : Utils.AuthHeader()
    }
    return fetch(`${Utils.API_URL}/user/checkAvalibility?${queryString.stringify({username})}`, request).then(handleResponse).catch(handleError);
}

export function getAllowedToPost(){
    var request = {
        method : 'GET',
        headers : Utils.AuthHeader()
    }

    return fetch(`${Utils.API_URL}/user/allowed`, request).then(handleResponse).catch(handleError);
}


function handleResponse(res){
    if(!res.ok){
        var errorObj = {};
        errorObj.status = res.status;
        errorObj.message = res.statusText;
        return Promise.reject(errorObj);
    }

    return res.json();
}

function handleError(err){

    if( err.status == 401){
        return Promise.reject({ message : 'Unauthorized to access'});
    }

    if( err.status == 404 ){
        return Promise.reject({ message : 'Service unavailable'});
    }
    return Promise.reject(err);
}