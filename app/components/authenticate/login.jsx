import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import AlertBanner from '../alert-banner/alertbanner';

import {login} from '../../actions/userActions';

const styles = theme => ({
    root: {
        // ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        // paddingBottom: theme.spacing.unit * 2,
        // padding:  theme.spacing.unit * 10
    },
    container: {
        padding:  theme.spacing.unit * 10,
        display: 'block'
    },
    textField: {
        display: 'block',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
      },
    button: {
        margin: theme.spacing.unit,
    },
    title :{
        marginRight: theme.spacing.unit
    },
    gridStyles : {
        height : '100vh'
    }
})


class Login extends React.Component{
    constructor(_props){
        super(_props);

        this.state = {
            username : '',
            password : ''
        };

        this.gridProps = {
            direction : 'row',
            justify : 'center',
            alignItems : 'center'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        /*Login*/
        try {
            this.props.login(this.state.username, this.state.password);
        } catch (signInError){
            console.warn('Error occured signing in...');
        }
        
    }   

    handleChange(e){
        
        if(e.target.name == 'username'){
            this.setState({ username : e.target.value });
        }

        if(e.target.name == 'password'){
            this.setState({ password : e.target.value });
        }
    }

    componentDidMount(){
        this.setState({ username : '', password : ''});
    }

    render(){
       const { classes, User } = this.props;
        if(User.loggedIn){
            return (<Redirect to="/home" />)
        }
       return ( 
        <Grid container {...this.gridProps} className={classes.gridStyles}>
            <Paper className={classes.root} elevation={1}>
                    <form className={classes.container} autoComplete="off" onSubmit={this.handleSubmit}>
                        <Typography align="center" variant="h4">
                            Login
                        </Typography>

                        <TextField 
                            required
                            label="Username" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            className={classes.textField}
                            
                        />

                        <TextField 
                            required
                            label="Password" 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            className={classes.textField}
                        />
                        <Button 
                            type="submit" 
                            name="submit" 
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            onSubmit={this.handleSubmit}
                        >
                            Submit
                        </Button>
                    </form>
            </Paper>
        </Grid>
       );
    }
}

const mapToState = function( _state = {}){
    return {..._state};
}

export default connect(mapToState, {login})(withStyles(styles)(Login));