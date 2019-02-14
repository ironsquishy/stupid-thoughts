import { combineReducers } from 'redux';
import AppReducer from './app_reducer';
import WebSocketReducer from './websocket_reducer';
import AuthenticationReducer from './authentication_reducer';
import UserActionReducer from './user_reducer';
import RegisterReducer from './registration_reducer';
import AlertReducer from './alert_reducer';
import StpdPostReducer from './stpdpost_reducer';


const rootReducer = combineReducers({
    rootData : {},
    wsData : WebSocketReducer,
    Session : AuthenticationReducer,
    User : UserActionReducer,
    Register : RegisterReducer,
    Alerts : AlertReducer,
    StpdPost : StpdPostReducer
});

export default rootReducer;