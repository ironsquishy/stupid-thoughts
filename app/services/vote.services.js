import Utils from '../utils';


export function postVote({ voter, voterId, postId, responseId }){
	let request = {
		method : 'POST',
		headers : Utils.AuthHeader(),
		body : JSON.stringify({voter, voterId, postId, responseId })
	};

	return fetch(`${Utils.API_URL}/voting/vote`, request).then(handleResponse).catch(handleError);
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