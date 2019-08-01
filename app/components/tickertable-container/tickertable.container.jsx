import React from 'react';
import { connect } from 'react-redux';

//Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import CircleProgress from '../circle-progress/circleprogress';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		backgroundColor: '#888988'
	},
	table: {
		minWidth: 700
	},
});

import TickerTableRow from '../tickertable-row/tickertable.row';

import FetchWebsock from '../../actions/fetch_websocket';

class TickerTable extends React.Component{
	constructor(props){
		super(props);

	}
	componentDidMount(){
		//this.props.FetchWebsock();
	}

	render(){
		const { classes , wsData } = this.props;
		if (wsData.data.length == 0 && !wsData.hasError){
			return (
				<Paper className={classes.root}>
					<CircleProgress />
				</Paper>
			);
		}
		if(wsData.hasError){
			return (
				<Paper className={classes.root}>
					<pre lang="json">{wsData.errorMessage.type}</pre>
					<pre lang="json">{wsData.errorMessage.message}</pre>
					<pre lang="json">{wsData.errorMessage.reason}</pre>
				</Paper>
			);
		}
		return (
			<Paper className={classes.root}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Product</TableCell>
							<TableCell>Buy/Sell</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Time</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{wsData.data.map((item, index) => {
							return (<TickerTableRow key={index} data={item} />);
						})}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

const mapToState = (state = {}) => {
	return {...state};
};

export default connect(mapToState, {FetchWebsock})(withStyles(styles)(TickerTable));