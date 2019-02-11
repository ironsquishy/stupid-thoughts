import React from 'react';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';

/* Components */
import StupidPost from '../stupid-post/stupidpost';

/*Services*/
import { GetCommunityLatestPosts } from '../../actions/stpdPostActions';

/*Styles*/
import Styles from './stupidpostlistStyles';

class StupidPostList extends React.Component{
    constructor(_props){
        super(_props);

        this.state = {};
        this.state.display = false;
        this.renderLatestPosts = this.renderLatestPosts.bind(this);
    }

    componentDidMount(){
        console.log('Stupid list mounted');
        this.props.GetCommunityLatestPosts();
        this.intGetCommunityLatestId = setInterval(() => {
            this.setState({ display : true });
        }, 3000);
        
    }

    renderLatestPosts(){
        const { posts } = this.props.StpdPost;
        const { display } = this.state;
        if (!display) {
            return;
        }
        // return this.props.StpdPost.posts.map((post, index) => {
        //     return (
        //         <Grow key={index} in={true} timeout={1000}>
        //             <StupidPost  {...post}/>  
        //         </Grow>
        //     )
        // })
    }

    render(){
        const { classes, User, StupidPost} = this.props;
        return(
            <React.Fragment>
                <Typography component="h6" variant="h6" gutterBottom>
                    Community Latest
                </Typography>
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