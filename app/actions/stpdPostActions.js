import { StpdPostServices } from '../services';
import Utils from '../utils';

export function GetCommunityLatestPosts(){
    return dispatch => {
        /*Fetch latest Stupid Post*/
        dispatch({ type : ''});
        StpdPostServices.getCommunityPostsLatest()
        .then( resPost => {
            dispatch({ type : '', post : resPost });
        })
        .catch(err => {
            dispatch({ type : '', error : err });
        })
    };
}