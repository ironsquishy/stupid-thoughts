import React from 'react';
import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import CircleProgress from '../circle-progress/circleprogress';

import ChartLine from './chart-line/chart.line';

import Error from '../error/error';

import Utils from '../../utils';

const styles = (theme) => ({
	root: {
		// width: '100%',
		marginTop: theme.spacing.unit * 3,
		backgroundColor: '#888988'
		// overflowX: 'auto'
	}
});

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
		if(_data[0].time =='Invalid'){
			this.smaData = [];
			return;
		}

		for(var i in _data){
			_data[i].sma = this.sma10(parseFloat(_data[i].price));
		}
        
		//this.smaData.push({ sma : this.sma10(parseFloat(_data[_data.length - 1].price))});
	}

	componentDidMount(){
		this.sma10 = Utils.Statistics.sma(10);

	}

	render(){
		const { classes, wsData } = this.props;
        
		this.testingSMA10(wsData.data);

		//console.log('SMA running:', this.smaData);
		if(wsData.isFetching){
			return (
				<Paper className={classes.root}>
					<CircleProgress />
				</Paper>
			);
		}


		if(wsData.hasError){
			return (
				<Paper className={classes.root}>
					<h2>Error!</h2>
				</Paper>
			);
		}

		return (
			<Paper className={classes.root}>
				<h1>CHART</h1>
				{/* <ChartLine data={wsData.data} /> */}
			</Paper>
		);
	}
}

const mapToState = (_state = {}) => {
	return {..._state}
};

export default connect(mapToState)(withStyles(styles)(ChartContainer));