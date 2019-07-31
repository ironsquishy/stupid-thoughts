import Utils from '../utils';


export default function userActions(_state = {}, _action){

	switch(_action.type){
	case Utils.USERACTION.DELETE_REQUEST :
		return {
			..._state
		}; 
        
	case Utils.USERACTION.DELETE_SUCCESS :
		return {
			..._state
		};
            
	case Utils.USERACTION.DELETE_FAILURE :
		return {
			..._state
		};

	case Utils.USERACTION.USER_FETCH_SUCCESS : 
		return {
			..._state, ..._action.profile
		};
	case Utils.USERACTION.USER_FETCH_FAILURE : 
		return {
			..._state
		};
        
	case Utils.USERACTION.USER_MODIFY_STATE : 
		return {
			..._state, ..._action.override
		};
	case Utils.USERACTION.USER_NAME_AVAILABLE_FETCH :
		return {
			..._state
		};
        
	case Utils.USERACTION.USER_NAME_AVAILABLE_SUCCESS : 
		return {
			..._state, 
			usernameAvailable : true
		};
        
	case Utils.USERACTION.USER_NAME_AVAILABLE_FAILURE :
		return {
			..._state,
			usernameAvailable : false
		};
            
	case Utils.USERACTION.USER_ALLOWED_POST_FETCH : 
		return {
			..._state
		};
	case Utils.USERACTION.USER_ALLOWED_POST_SUCCESS :
		return {
			..._state, allowedPost : _action.allowedPost
		};
	case Utils.USERACTION.USER_ALLOWED_POST_FAILURE :
		return {
			..._state
		};

	default :
		return _state;
	}

}