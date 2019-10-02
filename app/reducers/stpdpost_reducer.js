import Utils from '../utils';
import {StpdPostServices} from '../services';

const InitialState = {
	ownedPosts : [],
	communityPosts : [],
	isFetching : false
};

export default function stpdPostActions(_state = InitialState, _action){
	const { type, ...action } = _action;
	const userId = JSON.parse(sessionStorage.getItem('userId'));
	switch(type){
        
	case Utils.STPDPOSTACTION.COMMUNITYFETCH:
		return {
			..._state,
		};
        
	case Utils.STPDPOSTACTION.COMMUNITYLATEST:
		action.communityPosts = StpdPostServices.hasUserVoted(action.communityPosts, userId);
		return {
			..._state, ...action
		};
        
	case Utils.STPDPOSTACTION.COMMUNITYBYHASH:
		return {
			..._state
		};
        
	case Utils.STPDPOSTACTION.COMMUNITY_FETCH_ERROR:
		return {
			..._state
		};

	case Utils.STPDPOSTACTION.CREATEPOST:
		return {
			..._state
		};
        
	case Utils.STPDPOSTACTION.CREATEPOST_SUCCESS : 
		return {
			..._state, ...action
		};
        
	case Utils.STPDPOSTACTION.CREATEPOST_FAILURE :
		return {
			..._state, ...action
		};

	case Utils.STPDPOSTACTION.USER_OWNED_FETCH : 
		return {
			..._state
		};

	case Utils.STPDPOSTACTION.USER_OWNED_SUCCESS : 
		action.ownedPosts = StpdPostServices.hasUserVoted(action.ownedPosts, userId);
		return {
			..._state,
			ownedPosts : action.ownedPosts 
		};

	case Utils.STPDPOSTACTION.USER_OWNED_FAILURE :
		return {
			ownedPosts : [],
			..._state
		};
        
	case Utils.STPDPOSTACTION.MODIFY_POST_SUCCESS :
		return {
			..._state
		};

	case Utils.STPDVOTEACTION.REQUEST_VOTE : 
            
		return {
			..._state,
			isFetching : action.isFetching
		};
	case Utils.STPDVOTEACTION.REQUEST_VOTE_SUCCESS :
		_state  = StpdPostServices.modifyPosts(_state, action.response);
		return {
			..._state, 
			isFetching : action.isFetching, updatePost : action.response
		};
	case Utils.STPDVOTEACTION.REQUEST_VOTE_FAIL :
		return {
			..._state,
			isFecthing : action.isFecthing
		};
	default :
		return _state;
	}
}