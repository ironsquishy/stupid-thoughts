import Utils from '../utils';


export function getCommunityPostsLatest(){
	return fetch(`${Utils.API_URL}/stpdpost/community/latest`)
		.then(handleResponse)
		.catch(handleError);
}

export function getCommunityPostsAll(_limit = 10){
	var request = {
		method : 'GET',
		headers : {
			'Content-Type' : 'application/json'
		},
		body : JSON.stringify({ limit : _limit })
	};

	return fetch(`${Utils.API_URL}/stpdpost/community/all`, request)
		.then(handleResponse)
		.catch(handleError);
}

export function createNewPost(newPost){
	var request = {
		method  : 'POST',
		headers : Utils.AuthHeader(),
		body : JSON.stringify(newPost)
	};

	return fetch(`${Utils.API_URL}/stpdpost/create`, request)
		.then(handleResponse)
		.catch(handleError);
}

export function modifyPosts(sCurrent, updatePosts){
	const { ownedPosts, communityPosts } = sCurrent;
	const findPost = post => post._id == updatePosts._id;

	let index = ownedPosts.findIndex(findPost);
	let index2 = communityPosts.findIndex(findPost);

	if(index > -1 ){
		ownedPosts[index] = updatePosts;
	}

	if(index2 > -1) {
		communityPosts[index2] = updatePosts;
	}
	return sCurrent;
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
	return Promise.reject(err);
}