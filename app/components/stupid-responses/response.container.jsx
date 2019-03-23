import React from 'react';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

/*Component*/
import StupidResponseInput from './response.input';
import UserResponse from './response.user';

/*Services*/
import { CreateResponse } from '../../actions/stpdResponseActions';

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

        this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
        this.renderResponses = this.renderResponses.bind(this);
    }

    componentDidMount(){
        
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
                {this.renderResponses(MockStpdresponses)}
            </Grid>
        );
    }
}

const mapToState = ( _state = {} ) => {
    return _state
} 

export default connect(mapToState, { CreateResponse })(StpdResponseContainer);