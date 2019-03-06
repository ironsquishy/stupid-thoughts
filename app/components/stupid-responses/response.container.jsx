import React from 'react';

/*Material UI*/
import Typography from '@material-ui/core/Typography';

/*Component*/
import StupidResponseInput from './response.input';

class StpdResponseContainer extends React.Component{

    constructor(_props){
        super(_props);

        this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
    }

    componentDidMount(){
        
    }

    handleResponseSubmit(_message){
        const { postId, ownerId, owner } = this.props;

       console.log(` ${owner}-${ownerId} Response : ${_message} #${postId}`);
    }

    render(){
        const { postId, ownerId, owner } = this.props;
        
        return(
            <StupidResponseInput handleSubmit={this.handleResponseSubmit}  />
        );
    }
}

export default StpdResponseContainer;