import React from 'react';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

/* Components */
import StupidPost from '../stupid-post/stupidpost';

/*Services*/
import { GetCommunityLatestPosts } from '../../actions/stpdPostActions';

/*Styles*/
import Styles from './stupidpostlistStyles';

class StupidPostList extends React.Component{
    constructor(_props){
        super(_props);

        this.renderLatestPosts = this.renderLatestPosts.bind(this);
    }

    componentDidMount(){
        console.log('Stupid list mounted');
        this.props.GetCommunityLatestPosts();
    }

    renderLatestPosts(){
        return this.props.StpdPost.posts.map((post, index) => {
            return ( <StupidPost key={index} {...post}/>)
        })
    }

    render(){
        const { classes, User, StupidPost} = this.props;
        return(
            <React.Fragment>
                <Grid container spacing={40} justify="flex-start">
                    {this.renderLatestPosts()}
                </Grid>
            </React.Fragment>
        );
    }
}

const mapToState = (state = {}) => {
    return { ...state }
}

export default withStyles(Styles, { withTheme : true })(connect(mapToState, { GetCommunityLatestPosts })(StupidPostList))