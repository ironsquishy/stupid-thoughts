import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
    progress : {
        margin : theme.spacing.unit * 2
    }
});

function CircleProgress(_props){
    const { classes } = _props;
    return (
        <React.Fragment>
            <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} size={100}/>
        </React.Fragment>
    );
}
export default withStyles(styles)(CircleProgress);