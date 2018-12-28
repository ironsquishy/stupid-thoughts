import React from 'react';


import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
    progress : {
        margin : theme.spacing.unit * 2
    }
});

let CircleProgress = (_props)=>{
    const { classes } = _props;
    const gridProps = {
        direction : 'row',
        justify : 'center',
        alignItems : 'center'
    }
    return (
        <React.Fragment>
            <Grid container {...gridProps}>
                <CircularProgress className={classes.progress} thickness={5} size={100}/>
            </Grid>
        </React.Fragment>
    );
}
export default withStyles(styles)(CircleProgress);