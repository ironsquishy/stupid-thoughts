import { combineReducers } from 'redux';
import AppReducer from './app_reducer';
import WebSocketReducer from './websocket_reducer';

const rootReducer = combineReducers({
    rootData : AppReducer,
    wsData : WebSocketReducer
});

export default rootReducer;