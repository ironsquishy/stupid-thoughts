export default function (_state = {}, _action){
    switch (_action.type){
        case 'FETCH_DATA' :
            return Object({}, ...state, _action.payload)
        default :
            return _state;
    }
}