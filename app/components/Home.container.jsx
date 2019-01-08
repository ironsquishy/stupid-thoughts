import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';


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
                <ChartContainer />
                <TickerTableContainer />
            </React.Fragment>
        );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
};

export default connect(mapToState)(Home);