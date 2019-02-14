import Utils from '../utils';

let token = JSON.parse(localStorage.getItem('stupidToken')) || sessionStorage.getItem('stupidToken');
const initialState = token ? { loggedIn : true } : { loggedIn : false};

export default function authenticationReducer(_state = initialState, _action){
    switch(_action.type){
        case Utils.USERACTION.LOGIN_REQUEST :
            return { 
                loggedIn : false,
            }
        
        case Utils.USERACTION.LOGIN_SUCCESS :
            return {
                loggedIn : true,
                ..._action.user
            }
            
        case Utils.USERACTION.REGISTER_SUCCESS: 
             return {
                 loggedIn : true,
                 ..._action.user
             }
        
        case Utils.USERACTION.LOGIN_FAILURE : 
            return { 
                loggedIn : false,
                error : _action.error
            }
        
        case Utils.USERACTION.LOGOUT : 
            return {
                loggedIn : false
            }

        default :
            return _state
    }

}