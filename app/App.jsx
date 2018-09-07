import React from 'react';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';

//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {purpleA700, purpleA400} from 'material-ui/styles/colors';

darkBaseTheme.palette.primary1Color = purpleA400;
darkBaseTheme.palette.primary2Color = purpleA700;

//Components
import CircleProgress from './components/circle-progress/circleprogress';
import TickerTableContainer from './components/tickertable-container/tickertable.container';
import ChartContainer from './components/chart-container/chart.container';

import Store from './Store';

import './global.css';



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.state.isAppReady = false;
    }
    readyApp(){
        if(!this.state.isAppReady){
            return (
                <CircleProgress />
            )
        }

        return (
            <React.Fragment>
                <AppBar title="Crypto :)"/>
                <ChartContainer />
                <TickerTableContainer />
            </React.Fragment> 
        );
    }
    componentDidMount(){
        setTimeout(()=> {
            this.setState({isAppReady : true});
        }, 2000);
    }
    render(){   
        return (
            <Provider store={Store}>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    {this.readyApp()}
                </MuiThemeProvider>
            </Provider>
        );
    }
}