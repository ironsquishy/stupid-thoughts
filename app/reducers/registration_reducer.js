import Utils from '../utils';

const initialState = {
	registering : false,
	registered : false,
	registerFail : false
};

export default function registrationReducer( _state = initialState, _action){
	switch(_action.type){
        
	case Utils.USERACTION.REGISER_REQUEST :
		return {
			registering : true, 
			registered : false,
			registerFail : false,
			..._state
		};
	case Utils.USERACTION.REGISTER_SUCCESS :
		return {
			registering : false,
			registered : true,
			registerFail : false,
			..._state
		};
	case Utils.USERACTION.REGISTER_FAILURE :
		return {
			registering : false,
			registered : false,
			registerFail : true,
			..._state
		};
	default : 
		return _state;
	}
}