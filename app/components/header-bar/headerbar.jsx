import React from 'react';
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

const HeaderBar = (props) => {
    const {auth, classes } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" component="h1" color="inherit" className={classes.grow}>
                    Crypto Fun!
                </Typography>

                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign UP</Button>
                <Button color="inherit">Logout</Button>
            </Toolbar>
             {/* <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Sign up</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul> */}
        </AppBar>
    )
};

export default withStyles(Styles, { withTheme : true })(HeaderBar);