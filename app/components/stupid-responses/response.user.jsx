import React from 'react';

/*Material UI*/
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/*Styles*/
import { UserResponseStyles } from './response.styles';


class UserResponse extends React.Component{
    constructor(_props){
        super(_props);

        this.state = {};


        this.handleUserVote = this.handleUserVote.bind(this);

    }

    handleUserVote(e){
        const { responseId } = this.props; 
        this.props.onVote(e, responseId);
    }

    render(){
        const {classes, owner, message }  = this.props;

        return (
            <Grid item xs={12} md={12}>
                    <Card className={classes.card}>
                        <CardContent className={classes.grow}>
                            <Typography>
                                {owner}
                            </Typography>
                            <Typography>
                                {message}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                            <Button onClick={this.handleUserVote} className={classes.button}>Vote</Button>
                        </CardActions>
                    </Card>
            </Grid>
        );
    }
}

export default withStyles(UserResponseStyles)(UserResponse);