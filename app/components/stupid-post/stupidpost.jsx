import React from 'react';
import Styles from './stupidPostStyles';

/*Material UI*/
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const StupidPost = (_props) => {
    const { classes, message, owner, responses, date, stpdHash } = _props;
    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        {/* Card header */}
                        <span className={classes.cardHead}>
                            <Typography variant="subtitle1" color="textSecondary" align="left" className={classes.grow}>
                                {owner}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" align="right">
                                {date.toLocaleDateString('en-US')}
                            </Typography>
                        </span>

                        {/* Main Body Message */}
                        <Typography component="h2" variant="h5">
                            {message}
                        </Typography>

                        {/* Card Footer */}
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
};

export default withStyles(Styles)(StupidPost);
