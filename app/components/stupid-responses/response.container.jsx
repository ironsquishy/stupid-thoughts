import React from 'react';

/*Material UI*/
import Typography from '@material-ui/core/Typography';

class StpdResponseContainer extends React.Component{

    constructor(_props){
        super(_props);
    }

    componentDidMount(){
        console.log('Responses did mount...');
    }

    render(){
        return(
            <Typography>
                Hello World
            </Typography>
        );
    }
}

export default StpdResponseContainer;