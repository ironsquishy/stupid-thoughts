import { createStore, applyMiddleware, compose } from 'redux';

import RootReducers from './reducers';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

/*Develpoment*/
import logger from 'redux-logger';
//Browser Debugger
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(RootReducers, /* preloadedState, */ composeEnhancers(middleware));

/*Production*/
//const middleware = applyMiddleware(thunk, promise);
//const Store = createStore(RootReducers, middleware);

export default Store;