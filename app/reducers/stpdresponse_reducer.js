import Utils from '../utils';

const initialState = {
	postResponses : [],
	hashPosts : [],
};

export default function stpdResponseReducer( _state = initialState, _action ){

	switch (_action.type) {
	case Utils.STPDRESPONSEACTION.CREATE_RESPONSE:
		return {
			..._state
		};
        
	case Utils.STPDRESPONSEACTION.CREATE_RESPONSE_SUCCESS:
		return {
			..._state, ..._action.response
		};
        
	case Utils.STPDRESPONSEACTION.CREATE_RESPONSE_FAIL:
		return {
			..._state, ..._action.err
		};

	case Utils.STPDRESPONSEACTION.GET_RESPONSES_FETCH :
		return {
			..._state,
			isFetching : true,
		};
	case Utils.STPDRESPONSEACTION.GET_RESPONSES_SUCCESS :
		_state.hashPosts[_action.postId] = _action.postResponses;
		return {
			..._state,
			postResponses : _action.postResponses,
			isFetching : false
		};  
	case Utils.STPDRESPONSEACTION.GET_RESPONSES_FAILURE :
		return {
			..._state, 
			isFetching : false 
		};
        
	default :
		return {
			..._state
		};
	}
}