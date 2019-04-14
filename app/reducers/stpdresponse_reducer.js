import Utils from '../utils';

const initialState = {
    ownedResponses : []
}

export default function stpdResponseReducer( _state = initialState, _action ){

    switch (_action.type) {
        case Utils.STPDRESPONSEACTION.CREATE_RESPONSE:
            return {
                ..._state
            }
        
        case Utils.STPDRESPONSEACTION.CREATE_RESPONSE_SUCCESS:
            return {
                ..._state, ..._action.response
            }
        
        case Utils.STPDRESPONSEACTION.CREATE_RESPONSE_FAIL:
            return {
                ..._state, ..._action.err
            }

        case Utils.STPDRESPONSEACTION.GET_RESPONSES_FETCH :
            return {
                ..._state
            }
        
        case Utils.STPDRESPONSEACTION.CREATE_RESPONSE_SUCCESS :
            return {
                ..._state
            }
        
            
        case Utils.STPDRESPONSEACTION.GET_RESPONSES_FAILURE :
            return {
                ..._state
            }
        
        default :
            return {
                ..._state
            }
    }
}