import { combineReducers } from 'redux';

/*Reducer List*/
import AuthenticationReducer from './authentication_reducer';
import UserActionReducer from './user_reducer';
import AlertReducer from './alert_reducer';
import StpdPostReducer from './stpdpost_reducer';
import StpdResponseReducer from './stpdresponse_reducer';


const rootReducer = combineReducers({
	Session : AuthenticationReducer,
	User : UserActionReducer,
	Alerts : AlertReducer,
	StpdPost : StpdPostReducer,
	StpdResponse : StpdResponseReducer,
});

export default rootReducer;