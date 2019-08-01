import React from 'react';

/*Material UI */
import Typography from '@material-ui/core/Typography';

class CountdownTimer extends React.Component{
	constructor(_props){
		super(_props);
		this.state = {
			days : 0,
			hours : 0,
			minutes: 0,
			seconds : 0
		};


		this.countDownTimerId = null;
		this.timer = this.timer.bind(this);
		this.timerHasFinish = this.timerHasFinish.bind(this);
	}

	componentDidMount(){
		const { endDate } = this.props;
		if(isNaN(endDate)){
			console.log('Prop: end date is not date');
			return;
		}
        
		this.countDownTimerId = setInterval(this.timer, 1000, endDate);

	}

	timer(endDate){
		let startDate = new Date().getTime();
        
		let timeRemaining = parseInt( (endDate - startDate) / 1000);
       
		if( timeRemaining < 0 ){
			clearInterval(this.countDownTimerId);
			this.timerHasFinish();
			return;
		}

		this.days = parseInt( timeRemaining / 86400);
		timeRemaining = ( timeRemaining % 86400);

		this.hours = parseInt( timeRemaining / 3600);
		timeRemaining = ( timeRemaining % 3600);

		this.minutes = parseInt( timeRemaining / 60);
		timeRemaining = ( timeRemaining % 60);

		this.seconds = parseInt( timeRemaining );
        
		this.setState({ days: this.days, hours: this.hours, minutes: this.minutes, seconds: this.seconds});
	}

	componentWillUnmount(){
		clearInterval(this.countDownTimerId);
	}

	timerHasFinish(){
		this.props.timerFinished();
	}

	render(){
		const { hours, minutes, seconds } = this.state;
		return (
			<Typography variant="h6" component="h6" color="textPrimary" align="center">
                Time left: {hours}h {minutes}m {seconds}s
			</Typography>
		);
	}
}

export default CountdownTimer;