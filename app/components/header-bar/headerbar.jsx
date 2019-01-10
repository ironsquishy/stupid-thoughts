import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/*Material UI components*/
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Styles = (theme) => ({
    grow: {
        flexGrow: 1,
      }
});

class HeaderBar extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginBtn = this.handleLoginBtn.bind(this);
        this.handleLogoutBtn = this.handleLogoutBtn.bind(this);
        this.handleSignUpBtn = this.handleSignUpBtn.bind(this);
    }

    componentDidMount(){

    }

    handleLoginBtn(e){
        this.props.history.push('/login');
    }

    handleSignUpBtn(e){
        this.props.history.push('/register');
    }

    handleLogoutBtn(e) {
        this.props.history.push('/logout');
    }

    render(){
        const {classes, User, Alerts } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                   
                    <Typography variant="h5" component="h1" color="inherit" className={classes.grow}>
                            <Link to="/"> Stupid Thoughts </Link>
                    </Typography>
                   
                    
    
                    { !User.loggedIn && <Button color="inherit" onClick={this.handleLoginBtn}>Login</Button>}
                    { !User.loggedIn && <Button color="inherit" onClick={this.handleSignUpBtn}>Sign UP</Button>}
                    { User.loggedIn && <Button color="inherit" onClick={this.handleLogoutBtn}>Logout</Button>}
                </Toolbar>
            </AppBar>
        )
    }

}

const mapToState = function( state = {} ){
    return { ...state };
}

export default withStyles(Styles, { withTheme : true })(connect(mapToState)(HeaderBar));