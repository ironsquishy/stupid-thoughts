import { createStore, applyMiddleware, compose } from 'redux';

import RootReducers from './reducers';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

/*Develpoment*/
import logger from 'redux-logger';

let Store = null;

if (process.env.NODE_ENV == 'production'){
	/*Production*/
	Store = createStore(RootReducers, applyMiddleware(thunk, promise));
} else {
	/* Development */

	//Browser Debugger
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const middleware = applyMiddleware(thunk, promise, logger);

	Store = createStore(RootReducers, /* preloadedState, */ composeEnhancers(middleware));
}

export default Store;