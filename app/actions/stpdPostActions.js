import { StpdPostServices } from '../services';
import Utils from '../utils';

export function GetCommunityLatestPosts(){
	return dispatch => {
		/*Fetch latest Stupid Post*/
		dispatch({ type : Utils.STPDPOSTACTION.COMMUNITYFETCH });
		StpdPostServices.getCommunityPostsLatest()
			.then( resPost => {
				dispatch({ type : Utils.STPDPOSTACTION.COMMUNITYLATEST, communityPosts : resPost });
			})
			.catch(err => {
				dispatch({ type : Utils.ALERTACTIONS.ERROR, message : err });
				dispatch({ type : Utils.STPDPOSTACTION.COMMUNITY_FETCH_ERROR, error : err });
			});
	};
}


export function CreateNewPost(createdPost){

	return dispatch =>{
		dispatch({ type : Utils.STPDPOSTACTION.CREATEPOST });

		StpdPostServices.createNewPost(createdPost)
			.then( resPost => {
				const { ownedPosts, ...restOfUser } = resPost;
				dispatch({ type : Utils.STPDPOSTACTION.CREATEPOST_SUCCESS, ownedPosts });
				dispatch({ type : Utils.USERACTION.USER_MODIFY_STATE, override : { ...restOfUser }});
			})
			.catch( err => {
				dispatch({ type : Utils.STPDPOSTACTION.CREATEPOST_FAILURE, isError : true, message : err.message});
			});
	};
}