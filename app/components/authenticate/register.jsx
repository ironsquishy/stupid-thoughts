import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Done from '@material-ui/icons/Done';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
/*Components*/


/*Service*/
import { register, CheckAvailable } from '../../actions/userActions';

const styles = theme => ({
    root: {
        //...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        // paddingBottom: theme.spacing.unit * 2,
        //padding:  theme.spacing.unit * 10
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
    },
    doneIcon : {
        color : 'limegreen'
    },
    errorRed : {
        color : '#f44336'
    }
})



class Register extends React.Component{
    constructor(_props){
        super(_props);

        this.state = {
            username : '',
            password : '',
            isAvailable : null,
            isFetchingName : false
        };

        this.gridProps = {
            direction : 'row',
            justify : 'center',
            alignItems : 'center'
        }

        this.checkAvailableId = null;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkAvailability = this.checkAvailability.bind(this);
        this.renderUsernameAdorment = this.renderUsernameAdorment.bind(this);
    }

    checkAvailability(username){
        
        
        this.props.CheckAvailable(username)
        .then(res => {
            this.setState({ isAvailable : res.isAvailable, isFetchingName : false });
        })
        .catch(err => console.log(err) );
       
    }

    handleSubmit(e){
        e.preventDefault();
        const { isAvailable } = this.state;

        if(isAvailable === true){
            this.props.register(this.state.username, this.state.password);
        } 
    }

    handleChange(e){
        
        if(e.target.name == 'username'){
            e.target.value = e.target.value.trim();

            if(e.target.value.length > 16){
                return;
            }
            this.setState({ username : e.target.value });
            
            clearTimeout(this.checkAvailableId);
            
            if(e.target.value){
                this.setState({ isFetchingName : true });
                this.checkAvailableId = setTimeout(this.checkAvailability, 1000, e.target.value);
            }  
            
            if(!e.target.value){
                this.setState({ isAvailable : null, isFetchingName : false });
            }
        }

        if(e.target.name == 'password'){
            this.setState({ password : e.target.value });
        }
    }

    componentDidMount(){
        this.setState({ username : '', password : ''});
    }

    renderUsernameAdorment(){
        const { classes } = this.props;
        const { isAvailable, isFetchingName } = this.state;

        if( isFetchingName ){
            return <CircularProgress size={24}/>
        }

        if(isAvailable){
            return <Done className={classes.doneIcon} />
        }

        if(isAvailable === false) {
            return <ErrorOutline className={classes.errorRed} />
        }

        return <AccountCircle/>
    }

    render(){
        const { classes, Session, User} = this.props;
        const { isAvailable } = this.state;

        if(Session.loggedIn){
            return (<Redirect to="/home" />)
        }

       return ( 
        <Grid container {...this.gridProps} className={classes.gridStyles}>
            <Paper className={classes.root} elevation={1}>
                
                    <form className={classes.container} autoComplete="off" onSubmit={this.handleSubmit}>
                        <Typography align="center" variant="h5" component="h5">
                            Create Stupid Account
                        </Typography>

                        <TextField 
                            required
                            label="New Username" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            className={classes.textField}
                            error={isAvailable === false}
                            helperText={(isAvailable === false) ? 'Sorry already taken! :(' : ''}
                            InputProps={{
                                endAdornment : (
                                    <InputAdornment position="end">
                                        {this.renderUsernameAdorment()}
                                    </InputAdornment> 
                                )
                            }}
                            
                        />

                        <TextField 
                            required
                            label="New Password" 
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
                            disabled={(!isAvailable)}
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

export default connect(mapToState, { register, CheckAvailable })(withStyles(styles)(Register));