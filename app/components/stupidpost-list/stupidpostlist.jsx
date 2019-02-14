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
        this.intGetCommunityLatestId = setTimeout(() => {
            this.setState({ display : true });
        }, 5000);
        
    }

    componentWillUnmount(){
        clearInterval(this.intGetCommunityLatestId);
    }

    renderLatestPosts(){
      
        const { display } = this.state;
        if(this.props.list){
            return this.props.list.map((post, index) => {
                return (
                    // <Grow key={index} in={false} timeout="auto">
                    //     <StupidPost  {...post}/>  
                    // </Grow>
                    <StupidPost key={index} {...post}/>
                )
            })
        }

        return ( <p>Please wait</p>);
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