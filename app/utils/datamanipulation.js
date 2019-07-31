import uniqBy from 'lodash/uniqBy';
import find from 'lodash/find';

export function mergeArrays(identifier, ...allArrays){
	return uniqBy(allArrays, identifier);
}

export function getResponsesFrom(identifier, arrayOfPosts){

	let tempPost = find(arrayOfPosts, identifier);

	return tempPost ? tempPost.stpdResponses : [];
}