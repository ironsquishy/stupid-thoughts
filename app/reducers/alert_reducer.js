import Utils from '../utils';

const initialState = { isError : false, message : '' };
export default function (_state = initialState, _action){
    switch (_action.type){
        case  Utils.ALERTACTIONS.ERROR:
            return {
                isError: true,
                message : _action.message,
            }
        case Utils.ALERTACTIONS.CLEAR:
            return {
                isError: false,
                message: ''
            }
        case Utils.ALERTACTIONS.SUCCESS:
            return {
                isError : false,
                message : _action.message
            }
        default:
            return _state
    }
}