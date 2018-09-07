import Utils from '../utils';

const initialState = {
    isFectching : true,
    isUpdate : false,
    hasError : false, 
    errorMessage : null,
    data : []
}


export default function WebSocket_Reducer(_state = initialState, _action){
    
    switch (_action.type){
        case Utils.FETCH_WEBSOCKET_DATA:
            return Object.assign({}, _state, {
                isFectching : true,
                isUpdate : false,
                hasError : false, 
                errorMessage : null,
                data : []
            });
        
        case Utils.FETCH_WEBSOCKET_DATA_SUCCESS:
            return Object.assign({}, _state, {
                isFectching : false,
                isUpdate : false,
                hasError : false, 
                errorMessage : null,
                data : _action.payload
            });

        case Utils.FETCH_WEBSOCKET_DATA_FAIL:
            return Object.assign({}, _state, {
                isFectching : false,
                isUpdate : false,
                hasError : true, 
                errorMessage : _action.err,
                data : _action.payload
            });

        case Utils.FETCH_WEBSOCKET_DATA_UPDATE:
            return Object.assign({}, _state, {
                isFectching : false,
                isUpdate : true,
                hasError : false, 
                errorMessage : null,
                data : addToData(_state.data, _action.payload)
            });
        
        default : 
            return _state;
    }  

    function addToData(arr, item){
        var outArray = arr.slice();

        outArray.unshift(item);
        if (outArray.length > 6){
            outArray.pop();
        }
        return outArray;
    }
}