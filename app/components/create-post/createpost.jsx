import React from 'react';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

/*Components*/
import CountdownTimer from '../countdown-timer/countdowntimer';

/*Actions*/
import { CreateNewPost } from '../../actions/stpdPostActions';
import { GetAllowedPost } from '../../actions/userActions';

/*Style*/
import Styles from './createpoststyles';

function initCountdown(endDate, component){
    let days = 0, hours = 0,  minutes = 0, seconds = 0;
    endDate = new Date(endDate).getTime();
    
    if (isNaN(endDate)){
        console.warn('Countdown deprecated... parameters undefined');
        return { 
            clear : function(){},
            update : function(){},
            restart : function(){}
        }
    }

    const coundIntervalId = setInterval(calculateCountdown, 1000);
    function calculateCountdown(){
        let startDate = new Date().getTime();
        
        let timeRemaining = parseInt( (endDate - startDate) / 1000);
       
        if( timeRemaining < 0 ){
            console.log('Countdown Time has run out...');
            clearInterval(coundIntervalId);
            console.log('Countdown Trigger allowed to post');
            return;
        }

        days = parseInt( timeRemaining / 86400);
        timeRemaining = ( timeRemaining % 86400);

        hours = parseInt( timeRemaining / 3600);
        timeRemaining = ( timeRemaining % 3600);

        minutes = parseInt( timeRemaining / 60);
        timeRemaining = ( timeRemaining % 60);

        seconds = parseInt( timeRemaining );
        
        component.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds});
    }

    return {
        days, 
        hours,
        minutes,
        seconds,
        clear : function(){
            clearInterval(coundIntervalId);
        },
        update : function(){},
        restart : function(){}
    }


}

class CreatePost extends React.Component{
    constructor(_props){
        super(_props);

        this.state = {};
        this.state.postMessage = '';
        this.countDown = null;
        this.state.days = 0;
        this.state.hours = 0;
        this.state.minutes = 0;
        this.state.seconds = 0;

        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.timerDone = this.timerDone.bind(this);
    }

    handlePostSubmit(e){
        e.preventDefault();
        
        var sendPost = {
            owner : this.props.User.username,
            message : this.state.postMessage
        };
        
        this.props.CreateNewPost(sendPost);
        
        this.setState({ postMessage : ''});
        
    }

    handleMessageChange(e){
        this.setState({ postMessage : e.target.value});
    }

    componentDidMount(){
        /*Check if can make a post*/

    }

    componentWillUnmount(){
        // if(this.countDown){
        //     this.countDown.clear();
        // }
    }

    timerDone(){
        
        this.props.GetAllowedPost();
    }

    render(){
        const { classes, User} = this.props;
        if(User.allowedPost === false){
            return(
                <Grid item xs={12} md={12}>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent className={classes.cardContentLayout}>
                                {/* Card header */}
                                <span className={classes.cardHead}>
                                    <Typography variant="subtitle1" color="textSecondary" align="left" className={classes.grow}>
                                        {User.username}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" align="right">
                                        {new Date().toLocaleDateString('en-US')}
                                    </Typography>
                                </span>
                                {/* Card Body */}
                                <span className={classes.countDownContent}>
                                    <Typography variant="h6" component="h6" color="textPrimary" align="left" className={classes.grow}>
                                        Next available time to create a new post 
                                    </Typography>
                                    {/* <Typography variant="h6" component="h6" color="textPrimary" align="center">
                                        Time left: {this.state.hours}h {this.state.minutes}m {this.state.seconds}s
                                    </Typography> */}
                                    <CountdownTimer endDate={new Date(User.nextPostDate).getTime()} timerFinished={this.timerDone}/>
                                </span>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            );
        }

        return (
            <Grid item xs={12} md={12}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent className={classes.cardContentLayout}>
                            {/* Card header */}
                            <span className={classes.cardHead}>
                                <Typography variant="subtitle1" color="textSecondary" align="left" className={classes.grow}>
                                    {User.username}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" align="right">
                                    {new Date().toLocaleDateString('en-US')}
                                </Typography>
                                {/* <Typography variant="subtitle1" color="textPrimary" align="right" className={statusDot}>
                                </Typography> */}
                            </span>
                            <form autoComplete="on" noValidate onSubmit={this.handlePostSubmit}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Put Stupid thought here..."
                                    multiline
                                    rows="2"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleMessageChange}
                                    value={this.state.postMessage}
                                />
                                <Button 
                                    type="submit" 
                                    name="submit" 
                                    variant="outlined"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Submit stupid thought!
                                </Button>
                            </form>
                        </CardContent>
                    </div>
                </Card>
            </Grid>
        );
    }
}

const mapToState = function ( _state = {}){
    return { ..._state };
}

export default connect(mapToState, { CreateNewPost, GetAllowedPost })(withStyles(Styles, { withTheme : true })(CreatePost));