import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

/*Components*/
import TickerTableContainer from './tickertable-container/tickertable.container';
import ChartContainer from './chart-container/chart.container';
import StupidPost from './stupid-post/stupidpost';
import CreatePost from './create-post/createpost';

/*Styles*/
import Styles from './homeStyles';


class Home extends React.Component{
    constructor(_props){
        super(_props);
    }

    render(){
        var { classes, User } = this.props;
        
        if(!User.loggedIn){
            return (<Redirect to={{ pathname: '/login'}} />);
        }

        return (
            <React.Fragment>
                
                <Grid container spacing={40} className={classes.layout}>
                    <CreatePost />
                    <StupidPost date={new Date()} message="Welcome home dummy" owner="stupidGuy" />
                    <StupidPost date={new Date()} message="Hello World AGIN!!!!" owner="ironsquishy"/>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
};

export default connect(mapToState)(withStyles(Styles, { withTheme : true })(Home));