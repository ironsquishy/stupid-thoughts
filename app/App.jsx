import React from 'react';
import { Provider, connect } from 'react-redux';


import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

//Material UI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from '@material-ui/core/AppBar';
// import Grid from '@material-ui/core/Grid';

//Components
import Home from './components/Home.container';
import CircleProgress from './components/circle-progress/circleprogress';
import TickerTableContainer from './components/tickertable-container/tickertable.container';
import ChartContainer from './components/chart-container/chart.container';
import Login from './components/authenticate/login';
import AlertBanner from './components/alert-banner/alertbanner';
import login from './components/authenticate/login';
import HeaderBar from './components/header-bar/headerbar';
import SignUp from './components/authenticate/register';
import Logout from './components/authenticate/logout';



/*Actions*/
import {clear} from './actions/alertActions';

/*App Theme CSS*/
//import './global.css';
import AppTheme from './AppTheme';
const AppStyles = theme => ({});



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
    
    componentDidMount(){
        /*Check for local User*/
        const { User } =  this.props;
        console.log('User:', User);
        
    }

    closeAlert(e){
        this.props.clear();
    }

    render(){
        const { wsData,  Alerts, User} = this.props;

        return (
                <Router>
                    <MuiThemeProvider theme={AppTheme}>
                        <React.Fragment>
                            <CssBaseline/>
                            <AlertBanner open={Alerts.isError} onDismissAlert={this.closeAlert} message={Alerts.message}/>
                            <HeaderBar />
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={SignUp} />
                            <Route path="/home" component={Home}/>
                            <Route path="/logout" component={Logout} />
                        </React.Fragment>
                    </MuiThemeProvider>
                </Router>
        );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
}

export default withStyles(AppStyles, {withTheme: true})(connect(mapToState, {clear})(App));
