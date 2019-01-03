import React from 'react';
import { Provider, connect } from 'react-redux';


import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Grid from '@material-ui/core/Grid';


//Components
import Home from './components/Home.container';
import CircleProgress from './components/circle-progress/circleprogress';
import TickerTableContainer from './components/tickertable-container/tickertable.container';
import ChartContainer from './components/chart-container/chart.container';
import Login from './components/authenticate/login';
import AlertBanner from './components/alert-banner/alertbanner';
import login from './components/authenticate/login';


/*Actions*/
import {clear} from './actions/alertActions';

import './global.css';



// const Home = (_props) => {

//     var { auth } = _props;
//     if(!auth){
//         return(<Redirect to={{ pathname: '/login'}} />);
//     }

//     return (
//         <React.Fragment>
//             <ChartContainer />
//             <TickerTableContainer />
//         </React.Fragment>
//     );
// }

class App extends React.Component{
    constructor(props){
        super(props);
        this.gridOptions = {
            direction : 'row',
            justify : 'center',
            alignItems : 'center'
        }

        this.closeAlert = this.closeAlert.bind(this);
    }
    
    componentDidMount(){}

    closeAlert(e){
        this.props.clear();
    }

    render(){
        const { wsData,  Alerts, User, Register} = this.props;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <AppBar title="Crypto">
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </AppBar>
                    <AlertBanner open={Alerts.isError} onDismissAlert={this.closeAlert} message={Alerts.message}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
}

export default connect(mapToState, {clear})(App);
