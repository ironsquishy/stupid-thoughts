import React from 'react';

/*Material UI*/
import Typography from '@material-ui/core/Typography';

/*Component*/
import StupidResponseInput from './response.input';

class StpdResponseContainer extends React.Component{

    constructor(_props){
        super(_props);
    }

    componentDidMount(){
        console.log('Responses did mount...');
    }

    handleResponseSubmit(_message){
        console.log('Response conatiner level submit:', _message);
    }

    render(){
        return(
            <StupidResponseInput handleSubmit={this.handleResponseSubmit}  />
        );
    }
}

export default StpdResponseContainer;