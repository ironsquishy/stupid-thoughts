import { combineReducers } from 'redux';
import AppReducer from './app_reducer';
import WebSocketReducer from './websocket_reducer';
import AuthenticationReducer from './authentication_reducer';
import RegisterReducer from './registration_reducer';

const rootReducer = combineReducers({
    rootData : AppReducer,
    wsData : WebSocketReducer,
    user : { ...AuthenticationReducer, ...RegisterReducer }
});

export default rootReducer;