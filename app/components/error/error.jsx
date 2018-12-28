import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root :  {
        marginTop: theme.spacing.unit * 3,
        backgroundColor: '#888988'
    }
});

const Error = (_props) =>{
    let gridOptions = {
        direction : 'row',
        justify : 'center',
        alignItems : 'center'
    };

    return (
        <React.Fragment>
            <Grid {...gridOptions}>
                <h1>Uh oh, somthing went wrong...</h1>
            </Grid>
        </React.Fragment>
    );
}

export default withStyles(styles)(Error);