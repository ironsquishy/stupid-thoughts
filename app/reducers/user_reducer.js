import Utils from '../utils';


export default function userActions(_state = {}, _action){

    switch(_action.type){
        case Utils.USERACTION.DELETE_REQUEST :
            return {
                ..._state
            } 
        
        case Utils.USERACTION.DELETE_SUCCESS :
            return {
                ..._state
            }
            
        case Utils.USERACTION.DELETE_FAILURE :
            return {
                ..._state
            }

        case Utils.USERACTION.USER_FETCH_SUCCESS : 
            return {
                ..._state, ..._action.profile
            }
        case Utils.USERACTION.USER_FETCH_FAILURE : 
            return {
                ..._state
            }
        
        case Utils.USERACTION.USER_MODIFY_STATE : 
            return {
                ..._state, ..._action.override
            }

        default :
            return _state
    }

}