import React from 'react';
import { connect } from 'react-redux';
import Utils from '../../utils';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

/*Component*/
import StupidResponseInput from './response.input';
import UserResponse from './response.user';
import CircleProgress from '../circle-progress/circleprogress';

/*Services*/
import { CreateResponse, GetResponsesByPostId } from '../../actions/stpdResponseActions';
import { Vote } from '../../actions/vote_actions';

class StpdResponseContainer extends React.Component{

    constructor(_props){
        super(_props);  

        this.state = {};
        this.state.postResponses = null;


        this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
        this.renderResponses = this.renderResponses.bind(this);
        this.handleRefreshResponses = this.handleRefreshResponses.bind(this);
        this.handleUserVote = this.handleUserVote.bind(this);
    }

    componentDidMount(){
        const { postId, GetResponsesByPostId } = this.props;        
        GetResponsesByPostId(postId);
    }

    componentWillUnmount(){
        
    }

    handleResponseSubmit(_message){
        const { postId, User, CreateResponse } = this.props;

        let newResponse = {
            owner : User.username,
            ownerId : User._id,
            postId : postId,
            message : _message
        }
       CreateResponse(newResponse);  
    }

    handleUserVote(e, responseId ){
        const { postId, User, Vote } = this.props;

        
        let request = { owner : User.username, ownerId : User._id , postId, responseId };
        Vote(request);
    }

    handleRefreshResponses(e){
        const { postId } = this.props;

        GetResponsesByPostId(postId);
    }

    renderResponses(responseList = [], isFetching){
         
        if(isFetching){
            return (
                <React.Fragment>
                    <CircleProgress size={50}/>
                </React.Fragment>
            )
        }

        if (!responseList.length){
            return (
                <Grid item xs={12} md={12}>
                    <Typography component="h6" variant="h6" color="primary" align="center" gutterBottom>
                        No Responses :(
                    </Typography>    
                </Grid>
            );
        }
       
        return responseList.map( (res, index) => {
            return (
                <UserResponse key={index} responseId={res._id} owner={res.owner} message={res.message} onVote={this.handleUserVote} />
            );
        })
    }

    render(){
        const { postId, ownerId, owner, StpdResponse : { hashPosts, isFetching }} = this.props;

        return(
            <Grid container spacing={40}>
                <Grid item xs={12} md={12}>
                    <StupidResponseInput handleSubmit={this.handleResponseSubmit}  />
                </Grid>
                {/* Display Responses */}
                <Grid item xs={12} md={12}>
                        <Divider variant="middle" light={true} />
                </Grid>
                {this.renderResponses(hashPosts[postId], isFetching)}
            </Grid>
        );
    }
}

const mapToState = ( _state = {} ) => {
    return _state
} 

export default connect(mapToState, { CreateResponse, GetResponsesByPostId, Vote })(StpdResponseContainer);