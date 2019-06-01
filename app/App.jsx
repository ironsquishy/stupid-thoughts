import React from 'react';
import { connect } from 'react-redux';


import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

//Material UI
import { withStyles, createMuiTheme } from '@material-ui/core/styles';


//Components
import Home from './components/Home.container';
import CircleProgress from './components/circle-progress/circleprogress';
import ChartContainer from './components/chart-container/chart.container';
import Login from './components/authenticate/login';
import AlertBanner from './components/alert-banner/alertbanner';
import login from './components/authenticate/login';
import HeaderBar from './components/header-bar/headerbar';
import SignUp from './components/authenticate/register';
import Logout from './components/authenticate/logout';



/*Actions*/
import {clear} from './actions/alertActions';

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
    }

    closeAlert(e){
        this.props.clear();
    }

    render(){
        const { Alerts, history } = this.props;
    
        return (
            <React.Fragment>
                <AlertBanner open={Alerts.isError} onDismissAlert={this.closeAlert} message={Alerts.message} />
                <HeaderBar history={history}/>

                {/* TODO : Move components in Index to App */}

            </React.Fragment>
        );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
}

export default withStyles(AppStyles, {withTheme: true})(connect(mapToState, {clear})(App));
