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
        
        default :
            return {
                ..._state
            }
    }
}