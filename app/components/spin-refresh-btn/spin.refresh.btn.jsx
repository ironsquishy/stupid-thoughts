import React from 'react';

/*Material UI*/
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import { withStyles } from '@material-ui/core/styles';

const Styles = (theme) => ({

	spin : {
		animation : `spin-refresh 2000ms ${theme.transitions.easing.easeInOut} 100ms infinite`
	},

	'@keyframes spin-refresh' : {
		'0%' : {
			transform : 'rotate(0deg)',
		},

		'100%' : {
			transform : 'rotate(359deg)',
		}
	}
});


class RefreshButton extends React.PureComponent{
	constructor(_props){
		super(_props);

		this.state = { spinning : false };

		this.handleRefreshClick = this.handleRefreshClick.bind(this);
		this.handleHover = this.handleHover.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);

	}
	handleRefreshClick(event){
		const { onClick = ()=>{} } = this.props;
		this.setState( { spinning : true });

		onClick(event);
	}

	handleHover(event){
		this.setState({ spinning : true });
		// this.props.onHover(event);
	}

	handleMouseLeave(event){
		this.setState({ spinning : false });
	}

	render(){
		const {classes, color, variant, spin } = this.props;
		return (
			<IconButton 
				variant={variant} 
				color={color} 
				onClick={this.handleRefreshClick} 
				onMouseOver={this.handleHover} 
				onMouseLeave={this.handleMouseLeave}>
				<Typography color="primary">Refresh</Typography>
				<RefreshIcon className={this.state.spinning ? classes.spin : ''}/>
			</IconButton>);
	}
}

export default withStyles(Styles)(RefreshButton);

