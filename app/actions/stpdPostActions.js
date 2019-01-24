import { StpdPostServices } from '../services';
import Utils from '../utils';

export function GetCommunityLatestPosts(){
    return dispatch => {
        /*Fetch latest Stupid Post*/
        dispatch({ type : Utils.STPDPOSTACTION.COMMUNITYFETCH });
        StpdPostServices.getCommunityPostsLatest()
        .then( resPost => {
            dispatch({ type : Utils.STPDPOSTACTION.COMMUNITYLATEST, post : resPost });
        })
        .catch(err => {
            dispatch({ type : Utils.STPDPOSTACTION.COMMUNITY_FETCH_ERROR, error : err });
        })
    };
}


export function CreateNewPost(creaedPost){

    return dispatch =>{
        console.log('New Post created:', new Date().toLocaleTimeString());
        dispatch({ type : Utils.STPDPOSTACTION.CREATEPOST });

        StpdPostServices.createNewPost(creaedPost)
        .then( resPost => {

            dispatch({ type : Utils.STPDPOSTACTION.CREATEPOST_SUCCESS, isError : false });
        })
        .catch( err => {

            dispatch({ type : Utils.STPDPOSTACTION.CREATEPOST_FAILURE, isError : true, message : err.message});
        })
    }
}