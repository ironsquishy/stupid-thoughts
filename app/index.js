import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Store from './Store';
import App from './App';

const Index = (props) => {
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    )
}
ReactDOM.render( <Index />, document.getElementById('root') );

