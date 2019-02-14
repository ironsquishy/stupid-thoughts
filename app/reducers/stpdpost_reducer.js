import Utils from '../utils';

const InitialState = {
    ownedPosts : []
}

export default function stpdPostActions(_state = InitialState, _action){
    switch(_action.type){
        
        case Utils.STPDPOSTACTION.COMMUNITYFETCH:
            return {
                ..._state,
            } 
        
        case Utils.STPDPOSTACTION.COMMUNITYLATEST:
            return {
                ..._state, ..._action
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

        case Utils.STPDPOSTACTION.USER_OWNED_FETCH : 
        return {
            ..._state
        }

        case Utils.STPDPOSTACTION.USER_OWNED_SUCCESS : 
            return {
                ..._state,
                ownedPosts : _action.ownedPosts 
        }

        case Utils.STPDPOSTACTION.USER_OWNED_FAILURE :
            return {
                ownedPosts : [],
                ..._state
            }
        
        default :
            return _state
    }
}