import React from 'react';
import { connect } from 'react-redux';

/*Material UI*/
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

/*Components*/


/*Style*/
import Styles from './createpoststyles';

class CreatePost extends React.Component{
    constructor(_props){
        super(_props);
    }

    componentDidMount(){
        /*Check if can make a post*/
    }

    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Typography varient="h2" component="h2" align="center">"
                    Enter a new stupid post...
                </Typography>
                <Card>

                </Card>
            </React.Fragment>
        );
    }
}

const mapToState = function ( _state = {}){
    return { ..._state };
}

export default connect(mapToState)(withStyles(Styles, { withTheme : true })(CreatePost));