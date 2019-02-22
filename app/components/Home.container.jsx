import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

/*Components*/
import TickerTableContainer from './tickertable-container/tickertable.container';
import ChartContainer from './chart-container/chart.container';
import StupidPost from './stupid-post/stupidpost';
import CreatePost from './create-post/createpost';
import StupidList from './stupidpost-list/stupidpostlist';

/*Styles*/
import Styles from './homeStyles';

/* Services */
import { GetCurrentUser } from '../actions/userActions';
import { GetCommunityLatestPosts } from '../actions/stpdPostActions';


class Home extends React.Component{
    constructor(_props){
        super(_props);
    }

    componentDidMount(){
        this.props.GetCurrentUser();
        this.props.GetCommunityLatestPosts();
    }

    render(){
        var { classes, Session, User, StpdPost } = this.props;
        if(!Session.loggedIn){
            return (<Redirect to={{ pathname: '/login'}} />);
        }

        return (
            <React.Fragment>
                
                <Grid container spacing={40} className={classes.layout}>
                    <CreatePost/>
                    <Grid item xs={12} md={12}>
                        <Divider variant="middle" light={true} />
                    </Grid>
                    
                    <Typography component="h6" variant="h6" className={classes.textPrimary} gutterBottom>
                        Communities stupid thoughts :(
                    </Typography>
                    <StupidList list={StpdPost.communityPosts} />
                    <Grid item xs={12} md={12}>
                        <Divider variant="middle" light={true} />
                    </Grid>
                    <Typography component="h6" variant="h6" className={classes.textPrimary} gutterBottom>
                        Your Stupid thoughts 
                    </Typography>
                    <StupidList list={StpdPost.ownedPosts}/>   
                </Grid>
            </React.Fragment>
        );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
};

export default connect(mapToState, { GetCurrentUser, GetCommunityLatestPosts })(withStyles(Styles, { withTheme : true })(Home));