import React from 'react';
import { Provider } from 'react-redux';


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

import Store from './Store';

import './global.css';
import login from './components/authenticate/login';


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

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.state.isAppReady = false;
        this.state.isAuthenticated = false;
        this.gridOptions = {
            direction : 'row',
            justify : 'center',
            alignItems : 'center'
        }
    }
    readyApp(){
        if(!this.state.isAppReady){
            return (
                <React.Fragment>
                    <Grid container {...this.gridOptions}>
                        <CircleProgress />
                    </Grid>
               </React.Fragment>    
            )
        }

        return (
            <React.Fragment>
                <AppBar title="Crypto :)">
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </AppBar>
                
                <Route path="/" component={Home}/>
                <Route path="/login" component={Login} />
            </React.Fragment> 
        );
    }
    componentDidMount(){
        setTimeout(()=> {
            this.setState({isAppReady : true});
            this.setState({isAuthenticated : false});
        }, 2000);
    }
    render(){   
        return (
            <Provider store={Store}>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <AppBar title="Crypto :)">
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </AppBar>
                        
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}