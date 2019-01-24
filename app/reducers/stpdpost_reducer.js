import Utils from '../utils';

export default function stpdPostActions(_state = {}, _action){
    switch(_action.type){
        
        case Utils.STPDPOSTACTION.COMMUNITYFETCH:
            return {
                ..._state,
            } 
        
        case Utils.STPDPOSTACTION.COMMUNITYLATEST:
            return {
                ...state, ..._action
            }
        
        case Utils.STPDPOSTACTION.COMMUNITYBYHASH:
            return {
                ..._state
            }
        
        case Utils.STPDPOSTACTION.COMMUNITY_FETCH_ERROR:
            return {
                ..._state
            }

        case Utils.STPDPOSTACTION.CREATEPOST:
            return {
                ..._state
            }
        
        case Utils.STPDPOSTACTION.CREATEPOST_SUCCESS : 
            return {
                ..._state, ..._action
            }
        
        case Utils.STPDPOSTACTION.CREATEPOST_FAILURE :
            return {
                ..._state, ..._action
            }
        
        default :
            return _state
    }
}