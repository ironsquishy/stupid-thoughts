import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';

import App from './App';
import Store from './Store';

ReactDOM.render(
        <Provider store={Store}>
            <App />
        </Provider>,
    document.getElementById('root')
);

