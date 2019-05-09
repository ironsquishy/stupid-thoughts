import { combineReducers } from 'redux';
import AppReducer from './app_reducer';
//import WebSocketReducer from './websocket_reducer';
import AuthenticationReducer from './authentication_reducer';
import UserActionReducer from './user_reducer';
import RegisterReducer from './registration_reducer';
import AlertReducer from './alert_reducer';
import StpdPostReducer from './stpdpost_reducer';
import StpdResponseReducer from './stpdresponse_reducer';


const rootReducer = combineReducers({
    // wsData : WebSocketReducer,
    // Register : RegisterReducer,
    Session : AuthenticationReducer,
    User : UserActionReducer,
    Alerts : AlertReducer,
    StpdPost : StpdPostReducer,
    StpdResponse : StpdResponseReducer,
});

export default rootReducer;