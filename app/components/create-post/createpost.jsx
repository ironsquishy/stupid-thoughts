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

/*Actions*/
import { CreateNewPost } from '../../actions/stpdPostActions';

/*Style*/
import Styles from './createpoststyles';

class CreatePost extends React.Component{
    constructor(_props){
        super(_props);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
    }

    handlePostSubmit(e){
        e.preventDefault();
        console.log('Send stupid post');

        this.props.CreateNewPost({
            owner : 'test2',
            message :'From frontend first test...'
        })
    }

    componentDidMount(){
        /*Check if can make a post*/
    }

    render(){
        const { classes } = this.props;
        return (
            <Grid item xs={12} md={12}>
                <Card>
                    <div className={classes.cardDetails}>
                        <CardContent className={classes.cardContentLayout}>
                            {/* Card header */}
                            <span className={classes.cardHead}>
                                <Typography variant="subtitle1" color="textSecondary" align="left" className={classes.grow}>
                                    "Me"
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
                                    defaultValue=""
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
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

export default connect(mapToState, { CreateNewPost })(withStyles(Styles, { withTheme : true })(CreatePost));