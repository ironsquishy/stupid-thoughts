import { combineReducers } from 'redux';
import AppReducer from './app_reducer';
import WebSocketReducer from './websocket_reducer';
import AuthenticationReducer from './authentication_reducer';
import RegisterReducer from './registration_reducer';
import AlertReducer from './alert_reducer';


const rootReducer = combineReducers({
    rootData : {},
    wsData : WebSocketReducer,
    User : AuthenticationReducer,
    Register : RegisterReducer,
    Alerts : AlertReducer
});

export default rootReducer;