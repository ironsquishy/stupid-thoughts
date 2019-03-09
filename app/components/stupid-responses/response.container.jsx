import React from 'react';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';

/*Component*/
import StupidResponseInput from './response.input';

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

    immidiateAdd(newResponses){
        return;
    }

    renderResponses(responseList){
        return responseList.map( (res, index) => {
            return (
                <span key={index}>{res.message}</span>
            );
        })
    }

    render(){
        const { postId, ownerId, owner } = this.props;
        
        return(
            <div>
                <StupidResponseInput handleSubmit={this.handleResponseSubmit}  />
                {/* Display Responses */}
                {this.renderResponses(MockStpdresponses)}
            </div>
        );
    }
}

const mapToState = ( _state = {} ) => {
    return _state
} 

export default connect(mapToState, { CreateResponse })(StpdResponseContainer);