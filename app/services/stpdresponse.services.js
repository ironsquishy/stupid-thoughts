import Utils from '../utils';


export function GetResponsesByPostId(_postId){
	const request = {
		method : 'GET',
		headers : Utils.AuthHeader()
	};

	return fetch(`${Utils.API_URL}/stpdresponse/${_postId}`, request)
		.then(handleResponse)
		.catch(handleError);
}

export function CreateResponse(newResponse){

	const request = {
		method : 'POST',
		headers : Utils.AuthHeader(),
		body : JSON.stringify(newResponse)
	};

	return fetch(`${Utils.API_URL}/stpdresponse/create`, request)
		.then(handleResponse)
		.catch(handleError);

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