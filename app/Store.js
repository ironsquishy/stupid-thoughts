import { createStore, applyMiddleware, compose } from 'redux';

import RootReducers from './reducers';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

//Dev debugging
import devTools from 'remote-redux-devtools';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, promise, logger);

// const Store = createStore(
//     RootReducers, 
//         compose(middleware, devTools({
//             name: 'Web',
//             hostname : 'localhost',
//             port : 5678
//         })
//     )
// );

const Store = createStore(RootReducers, middleware);

export default Store;