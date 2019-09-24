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

	renderLatestPosts(posts, user, responses){

		if(posts){
			return posts.map((post, index) => {
				return (
					<StupidPost key={index} strangerId={user._id} strangerName={user.username} responses={responses[post._id]} {...post} />
				);
			});
		}

		return ( <p>Please wait</p>);
	}

	render(){
		const { User, list, StpdResponse : {hashPosts}} = this.props;
		return(
			<React.Fragment>
				<Grid container spacing={40} justify="flex-start" >
					{this.renderLatestPosts(list, User, hashPosts)}
				</Grid>
			</React.Fragment>
		);
	}
}

const mapToState = (state = {}) => {
	return { ...state };
};

export default withStyles(Styles, { withTheme : true })(connect(mapToState, { GetCommunityLatestPosts })(StupidPostList));