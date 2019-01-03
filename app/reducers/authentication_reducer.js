import Utils from '../utils';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn : true, user } : { loggedIn : false};

export default function authenticationReducer(_state = initialState, _action){
    switch(_action.type){
        case Utils.USERACTION.LOGIN_REQUEST :
            return { 
                loggedIn : false,
                user : _action.user,
                ..._state
            }
        
        case Utils.USERACTION.LOGIN_SUCCESS :
            return {
                loggedIn : true,
                user : _action.user,
                ..._state
            }
        
        case Utils.USERACTION.LOGIN_FAILURE : 
            return { 
                loggedIn : false,
                user : _action.user,
                error : _action.error,
                ..._state
            }
        
        case Utils.USERACTION.LOGOUT : 
            return {
                loggedIn : false,
                user : _action.user,
                ..._state
            }

        default :
            return _state
    }

}