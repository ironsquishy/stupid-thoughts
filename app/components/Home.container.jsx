import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';

/*Components*/
import TickerTableContainer from './tickertable-container/tickertable.container';
import ChartContainer from './chart-container/chart.container';


class Home extends React.Component{
    constructor(_props){
        super(_props);
    }

    render(){
        var { User } = this.props;
        
        if(!User.loggedIn){
            return (<Redirect to={{ pathname: '/login'}} />);
        }

        return (
            <React.Fragment>
                <Typography varient="h2" component="h2" align="center">"
                    Hello Welcome to your new home.
                </Typography>
            </React.Fragment>
        );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
};

export default connect(mapToState)(Home);