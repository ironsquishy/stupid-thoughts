import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/*Material UI components*/
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton  from '@material-ui/core/IconButton';


const Styles = (theme) => ({
    titleLink : {
        textDecoration: 'none',
        color : 'black'
    },
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
        this.handleMenuBtn = this.handleMenuBtn.bind(this);
        this.handleMenuCloseBtn = this.handleMenuCloseBtn.bind(this);
        
        this.renderMenu = this.renderMenu.bind(this);

        this.state = {};
        this.state.menuOpen = false;
        this.state.anchorElement = null;
    }

    handleLoginBtn(e){
        this.props.history.push('/login');
    }

    handleSignUpBtn(e){
        this.props.history.push('/register');
    }

    handleLogoutBtn(e) {
        this.setState({ menuOpen : false, anchorElement : null });
        this.props.history.push('/logout');
    }

    handleMenuBtn(e){
        this.setState({ menuOpen : true, anchorElement : e.currentTarget });
    }

    handleMenuCloseBtn(e){
        this.setState({ menuOpen : false, anchorElement : null });
    }

    handleProfileBtn(e){
        console.log('Go to profile page....');
    }

    renderMenu(){
        const { Session, User } = this.props;
        const { menuOpen, anchorElement } = this.state;

        if( !Session.loggedIn){
            return (
                <React.Fragment>
                    <Button color="inherit" onClick={this.handleLoginBtn}>Login</Button>
                    <Button color="inherit" onClick={this.handleSignUpBtn}>Sign UP</Button>
                </React.Fragment>
            );
        }

            
            return (
                <React.Fragment>
                    <IconButton onClick={this.handleMenuBtn} color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu 
                    anchorEl={anchorElement}
                    anchorOrigin={{ vertical : 'top', horizontal : 'right'}}
                    transformOrigin={{vertical : 'top', horizontal : 'right'}} 
                    open={menuOpen}
                    onClose={this.handleMenuCloseBtn}>
                        <MenuItem onClick={this.handleProfileBtn}>Profile</MenuItem>
                        <MenuItem onClick={this.handleLogoutBtn}>Logout</MenuItem>
                    </Menu>
                </React.Fragment>
            );
    }

    render(){
        const {classes, User, Session, Alerts } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="h1" color="inherit" className={classes.grow}>
                            <Link to="/" className={classes.titleLink}> Stupid Thoughts </Link>
                    </Typography>
                    {this.renderMenu()}
                    {/* { Session.loggedIn && <Button color="inherit" onClick={this.handleLogoutBtn}>Logout</Button>}
                    { Session.loggedIn  && <Typography varient="h6" color="inherit">Hello {User.username}</Typography>} */}
                </Toolbar>
            </AppBar>
        )
    }

}

const mapToState = function( state = {} ){
    return { ...state };
}

export default withStyles(Styles, { withTheme : true })(connect(mapToState)(HeaderBar));