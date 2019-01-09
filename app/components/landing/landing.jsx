import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/*Material UI */
import { withStyles } from '@material-ui/core/styles';


const LandingStyles = theme => ({});

class Landing extends React.Component{
    constructor (_props){
        super(_props);
    }

    render(){
        return(<h1>HELLO THERE !</h1>);
    }
}

const mapToState = (state = {}) => {
    return {...state};
};

export default withStyles(LandingStyles, { withTheme: true })(connect(mapToState)(Landing));