import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Modal from '@material-ui/core/Modal';

/*Components*/
//import TickerTableContainer from './tickertable-container/tickertable.container';
//import ChartContainer from './chart-container/chart.container';
import StupidPost from './stupid-post/stupidpost';
import CreatePost from './create-post/createpost';
import StupidList from './stupidpost-list/stupidpostlist';
import RefreshButton from './spin-refresh-btn/spin.refresh.btn';

/*Styles*/
import Styles from './homeStyles';

/* Services */
import { GetCurrentUser } from '../actions/userActions';
import { GetCommunityLatestPosts } from '../actions/stpdPostActions';


class Home extends React.Component{
	constructor(_props){
		super(_props);

		this.state = {
			openModal : false
		};

		this.handleRefreshComunityResponse = this.handleRefreshComunityResponse.bind(this);
		this.handleRefreshUserResponse = this.handleRefreshUserResponse.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
	}

	componentDidMount(){
		this.props.GetCurrentUser();
		this.props.GetCommunityLatestPosts();
	}

	handleRefreshComunityResponse(event){
		this.props.GetCommunityLatestPosts();
	}

	handleRefreshUserResponse(event){
		this.props.GetCurrentUser();
	}

	handleOpenModal(event){
		this.setState({ openModal : true });
	}

	handleCloseModal(event){
		this.setState({ openModal : false });
	}

	render(){
		var { classes, Session, User, StpdPost } = this.props;
		if(!Session.loggedIn){
			return (<Redirect to={{ pathname: '/login'}} />);
		}

		return (
			<React.Fragment>
                
				<Grid container spacing={40} className={classes.layout}>
					<CreatePost/>
					{/* Community posts */}
					<Grid item xs={12} md={12}>
						<Divider variant="middle" light={true} />
					</Grid>
					<Grid item xs={12} md={12} className={classes.flex}>
						<Typography 
							component="h6" 
							variant="h6" 
							className={classes.categoryText} 
							gutterBottom>
                            Communities stupid thoughts :(
						</Typography>
						<RefreshButton variant="outlined" color="primary" onClick={this.handleRefreshComunityResponse}/>
					</Grid>

					<StupidList list={StpdPost.communityPosts} />

					{/* User's posts */}
					<Grid item xs={12} md={12}>
						<Divider variant="middle" light={true} />
					</Grid>
					<Grid item xs={12} md={12} className={classes.flex}>
						<Typography 
							component="h6" 
							variant="h6" 
							className={classes.categoryText} 
							gutterBottom>
                            Your Stupid thoughts 
						</Typography>
						<RefreshButton variant="outlined" color="primary" onClick={this.handleRefreshUserResponse}/>
					</Grid>
					<StupidList list={StpdPost.ownedPosts}/>  
					{/* Modal Feature */}
					{/* <Grid item xs={12} md={12}>
                            <Button onClick={this.handleOpenModal}>Open Modal</Button>
                            <Modal open={this.state.openModal} onClose={this.handleCloseModal}>
                                <div>
                                    <Typography component="h4" variant="h4">
                                        Hello I am a cool modal!!!!
                                    </Typography>
                                </div>
                            </Modal>
                        </Grid>   */}
				</Grid>
                
                 
			</React.Fragment>
		);
	}
}

const mapToState = function( _state = {}){
	return {..._state};
};

export default connect(mapToState, { GetCurrentUser, GetCommunityLatestPosts })(withStyles(Styles, { withTheme : true })(Home));