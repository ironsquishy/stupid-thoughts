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

/*Services*/
import { CreateResponse, GetResponsesByPostId } from '../../actions/stpdResponseActions';

const MockStpdresponses = [
    {
        owner : 'ironsquishy',
        message : 'You are stupid',
        postId : 1234,
        ownerId : 4356,
        votes : 0
    },
    {
        owner : 'test1',
        message : 'I am are stupid',
        postId : 1234,
        ownerId : 4356,
        votes : 0
    },
    {
        owner : 'test2',
        message : 'We are stupid',
        postId : 1234,
        ownerId : 4356,
        votes : 0
    }

]

class StpdResponseContainer extends React.Component{

    constructor(_props){
        super(_props);  

        this.state = {};
        this.state.postResponses = null;


        this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
        this.renderResponses = this.renderResponses.bind(this);
    }

    componentDidMount(){
        const { postId, User, StpdPost : { communityPosts, ownedPosts }, GetResponsesByPostId } = this.props;
       
        const existResponses = Utils.getResponsesFrom({'_id' : postId }, Utils.mergeArrays('_id', communityPosts, ownedPosts));

        console.log('Existing response:', existResponses);
        
        GetResponsesByPostId(postId)
        .then( ({ responses })=> {
            this.setState({ postResponses : responses });
        })
        .catch( error => console.log('Error at component level:', error))
        .finally(() => console.log('Finished get responses by post ID...'));
    }

    componentWillUnmount(){
        const { postId, dispatch, StpdPost : { communityPosts, ownedPosts } } = this.props;

        

        setTimeout(()=>{
            for( let i = 0; i < communityPosts.length; i++){
                let post = communityPosts[i];
                if(post._id === postId){
                    post.stpdResponses = this.state.postResponses;
                    return;
                }
            }
        }, 0);

        setTimeout(()=>{
            for( let i = 0; i < ownedPosts.length; i++){
                let post = ownedPosts[i];
                if(post._id === postId){
                    post.stpdResponses = this.state.postResponses;
                    return;
                }
            }
        }, 0);

    }

    handleResponseSubmit(_message){
        const { postId, ownerId, owner, CreateResponse } = this.props;

       
       let newResponse = {
           owner : owner,
           ownerId : ownerId,
           postId : postId,
           message : _message
       }
       CreateResponse(newResponse)
       .then(res => console.log(` ${res.owner}-${res.ownerId} Response : ${res.message} #${res.postId}`))
       .catch(err => console.log('Response Failure:', err));
    }

    handleUserVote(e){
        console.log(`Response component on vote at the container level...`);
    }

    immidiateAdd(newResponses){
        return;
    }

    renderResponses(responseList){
        if(!responseList){
            return (
                <React.Fragment>
                    <p>No responses here!</p>
                </React.Fragment>
            )
        }
        return responseList.map( (res, index) => {
            return (
                <UserResponse key={index} owner={res.owner} message={res.message} onVote={this.handleUserVote} />
            );
        })
    }

    render(){
        const { postId, ownerId, owner } = this.props;
        
        return(
            <Grid container spacing={40}>
                <Grid item xs={12} md={12}>
                    <StupidResponseInput handleSubmit={this.handleResponseSubmit}  />
                </Grid>
                {/* Display Responses */}
                <Grid item xs={12} md={12}>
                        <Divider variant="middle" light={true} />
                </Grid>
                {this.renderResponses(this.state.postResponses)}
            </Grid>
        );
    }
}

const mapToState = ( _state = {} ) => {
    return _state
} 

export default connect(mapToState, { CreateResponse, GetResponsesByPostId })(StpdResponseContainer);