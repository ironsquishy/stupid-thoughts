import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

/*Material UI */
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

/* Components */
import StupidPost from '../stupid-post/stupidpost';


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

    componentDidMount(){
        console.log('Landing page mounted...');
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
                
                <div>
                    <Grid container spacing={40} className={classes.layout}>
                        <StupidPost date={new Date()} message="Hello world" owner="stupidGuy" />
                        {/* <Grid item xs={12} md={6}>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                    <span className={classes.cardHead}>
                                            <Typography variant="subtitle1" color="textSecondary" align="left" className={classes.grow}>
                                                Ironsquishy
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary" align="right">
                                                September 6th, 1979
                                            </Typography>
                                        </span>
                                        <Typography component="h2" variant="h5">
                                             Well you want to know what the F*#k is this?
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            yeah buddy!!
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid> */}

                        <Grid item xs={12} md={6}>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <span className={classes.cardHead}>
                                            <Typography variant="subtitle1" color="textSecondary" align="left" className={classes.grow}>
                                                Ironsquishy
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary" align="right">
                                                September 6th, 1979
                                            </Typography>
                                        </span>
                                        
                                        <Typography component="h2" variant="h5">
                                            It goes like this. You first need to create a Stupid account and that is it.
                                            Then we have come up with a stupid though or idea to make a post.
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            Response: But Steve wait I do not have any stupid thoughts or ideas!
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </div>


                <div >
                    <Grid container spacing={24}>
                        <Grid item>
                            <Typography variant="h3" component="h3" align="center" color="textPrimary">
                                
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" component="h4" color="textPrimary" paragraph>
                                
                            </Typography>
                            <Typography variant="h5" component="h5" color="textSecondary" paragraph>
                                
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

const mapToState = (state = {}) => {
    return {...state};
};

export default withStyles(LandingStyles, { withTheme: true })(connect(mapToState)(Landing));