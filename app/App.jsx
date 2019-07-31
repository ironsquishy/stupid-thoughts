import React from 'react';
import { connect } from 'react-redux';

//Material UI
import { withStyles } from '@material-ui/core/styles';

//Components
import AlertBanner from './components/alert-banner/alertbanner';
import HeaderBar from './components/header-bar/headerbar';

/*Actions*/
import {clear} from './actions/alertActions';

/*Styles*/
const AppStyles = theme => ({});

/*App Component*/
class App extends React.Component{

	constructor(props){
		super(props);
		this.gridOptions = {
			direction : 'row',
			justify : 'center',
			alignItems : 'center'
		};

		this.closeAlert = this.closeAlert.bind(this);
	}
    

	closeAlert(e){
		this.props.clear();
	}

	render(){
		const { Alerts, history } = this.props;
    
		return (
			<React.Fragment>
				<AlertBanner open={Alerts.isError} onDismissAlert={this.closeAlert} message={Alerts.message} />
				<HeaderBar history={history}/>

				{/* TODO : Move components in Index to App */}

			</React.Fragment>
		);
	}
}

const mapToState = function( _state = {}){
	return {..._state};
};

export default withStyles(AppStyles, {withTheme: true})(connect(mapToState, {clear})(App));
