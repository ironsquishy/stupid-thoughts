import React from 'react';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import GridList from '@material-ui/core/GridList';

/* Components */
import StupidPost from '../stupid-post/stupidpost';

/*Services*/
import { GetCommunityLatestPosts } from '../../actions/stpdPostActions';

/*Styles*/
import Styles from './stupidpostlistStyles';

class StupidPostList extends React.Component{
	constructor(_props){
		super(_props);

		this.state = {};
		this.state.display = false;
		this.renderLatestPosts = this.renderLatestPosts.bind(this);
	}

	componentDidMount(){
        
	}

	componentWillUnmount(){
        
	}

	renderLatestPosts(){
		const { User, list } = this.props;
		const { display } = this.state;

		if(list){
			return list.map((post, index) => {
				return (
				// <Grow key={index} in={false} timeout="auto">
				//     <StupidPost  {...post}/>  
				// </Grow>
				//const { classes, _id, ownerId, message, owner, createDate, isVoting = true } = this.props;
					<StupidPost key={index} strangerId={User._id} strangerName={User.username} {...post} />
				);
			});
		}

		return ( <p>Please wait</p>);
	}

	render(){
		const { classes, User, StupidPost} = this.props;
		return(
			<React.Fragment>
				<Grid container spacing={40} justify="flex-start" >
					{this.renderLatestPosts()}
				</Grid>
			</React.Fragment>
		);
	}
}

const mapToState = (state = {}) => {
	return { ...state };
};

export default withStyles(Styles, { withTheme : true })(connect(mapToState, { GetCommunityLatestPosts })(StupidPostList));