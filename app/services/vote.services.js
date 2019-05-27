import Utils from '../utils';


export function postVote({ ownerId, postId, responseId }){
    let request = {
        method : 'POST',
        headers : Utils.AuthHeader(),
        body : JSON.stringify({ownerId, postId, responseId })
    }

    return new Promise ((resolve, reject) => {
        if (!request.body) {
            reject('Body was not populated...');
        }
        resolve(request.body);
    });
}

function handleResponse(response){
    if(!response.ok){
        throw 'Error on voting post.';
    }
    
    return response.json();
}

function handleError(response){
    return Promise.reject(response);
}