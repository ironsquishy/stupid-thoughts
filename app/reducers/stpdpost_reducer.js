import Utils from '../utils';

export default function stpdPostActions(_state = {}, _action){
    switch(_action.type){
        
        case Utils.STPDPOSTACTION.COMMUNITYFETCH:
            return {
                ..._state
            } 
        
        case Utils.STPDPOSTACTION.COMMUNITYLATEST:
            return {
                ..._state
            }
        
        case Utils.STPDPOSTACTION.COMMUNITYBYHASH:
            return {
                ..._state
            }
        
        case Utils.STPDPOSTACTION.COMMUNITY_FETCH_ERROR:
            return {
                ..._state
            }
        
        default :
            return _state
    }
}