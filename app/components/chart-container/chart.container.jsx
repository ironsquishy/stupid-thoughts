import React from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';

import CircleProgress from '../circle-progress/circleprogress';

import ChartLine from './chart-line/chart.line';

import Utils from '../../utils';

class ChartContainer extends React.Component{
    constructor(_props){
        super(_props);
        this.smaData = [];
        this.sma10 = null;
    }

    testingSMA10(_data){

        if(_data.length == 0){
            this.smaData = [];
            return;
        }

        for(var i in _data){
            _data[i].sma = this.sma10(parseFloat(_data[i].price))
        }
    }

    componentDidMount(){
        this.sma10 = Utils.Statistics.sma(10);
    }

    render(){
        const { wsData } = this.props;
        
        this.testingSMA10(wsData.data);
        if(wsData.isFetching){
            return (
                <Paper>
                    <CircleProgress />
                </Paper>
            );
        }


        if(wsData.hasError){
            return (
                <Paper>
                    <h2>Error!</h2>
                </Paper>
            );
        }

        return (
            <Paper>
                <ChartLine data={wsData.data} />
            </Paper>
        );
    }
}

const mapToState = (_state = {}) => {
    return {..._state}
};

export default connect(mapToState)(ChartContainer);