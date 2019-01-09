import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

/*Material UI */
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


/*Custom Styles*/
import LandingStyles from './landingStylesCss';

class Landing extends React.Component{
    constructor (_props){
        super(_props);

        this.handleLoginBtn = this.handleLoginBtn.bind(this);
        this.handleSignUpBtn = this.handleSignUpBtn.bind(this);
    }

    handleSignUpBtn(e){
        this.props.history.push('/register');
    }

    handleLoginBtn(e){
        this.props.history.push('/login');
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div className={classes.heroContainer}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Welcome!
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            The place where you can express any question or (stupid) thought. While others
                            can respond and vote which is best suited for the greater good of society. Community Driven Intelliegence is what we call it.
                        </Typography>
                    </div>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={this.handleSignUpBtn}>Sign Up the stupidity awaits!</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={this.handleLoginBtn}>Wait need to Login first!</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

const mapToState = (state = {}) => {
    return {...state};
};

export default withStyles(LandingStyles, { withTheme: true })(connect(mapToState)(Landing));