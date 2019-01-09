import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Redux*/
import Store from './Store';

/*Components*/
import App from './App';
import Login from './components/authenticate/login';
import SignUp from './components/authenticate/register';
import Logout from './components/authenticate/logout';
import Home from './components/Home.container';
import Landing from './components/landing/landing';

const Index = (props) => {
    return (
        <Provider store={Store}>
            <Router>
                <div>
                    <Route component={App}/>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/register" component={SignUp} />
                        <Route path="/home" component={Home}/>
                        <Route path="/logout" component={Logout} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}
ReactDOM.render( <Index />, document.getElementById('root') );

