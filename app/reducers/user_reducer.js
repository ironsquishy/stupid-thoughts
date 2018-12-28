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

        default :
            return _state
    }

}