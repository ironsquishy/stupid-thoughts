import React from 'react';


/*Material UI*/
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { green } from '@material-ui/core/colors';
import Ballot from '@material-ui/icons/Ballot';
import HowToVote from '@material-ui/icons/HowToVote';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

/*Style */
import Styles from './stupidPostStyles';
import classnames from 'classnames';

/*Components*/
import StupidResponses from '../stupid-responses/response.container';
import { typography } from 'material-ui/styles';



class StupidPost extends React.Component{
    constructor(_props){
        super(_props);

        this.state = {
            expanded : false
        
        }

        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

    handleExpandClick(){
        
        this.setState({ expanded : !this.state.expanded });
    }

    render(){
    const { classes, _id, strangerId, strangerName, message, owner, createDate, isVoting = true, userVoted  = false } = this.props;
    
    //const statusDot = isVoting ? classes.greenDot : classes.redDot;
    
    const votingStatus =  isVoting ? classes.votingEnable : classes.votingDisable

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent className={classes.cardContentLayout}>
                        {/* Card header */}
                        <span className={classes.cardHead}>
                            <Typography variant="subtitle1" color="textSecondary" align="left" className={classes.ownerTitle}>
                                {owner}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" align="right">
                                {new Date(createDate).toLocaleDateString('en-US')}
                            </Typography>
                            {/* <Typography variant="subtitle1" color="textPrimary" align="right" className={statusDot}>
                            </Typography> */}
                            <HowToVote className={votingStatus} />
                        </span>

                        {/* Main Body Message */}
                        <Typography component="h6" variant="h6" style={{ fontSize : '1.15em', fontStyle : 'italic'}}>
                            {message}
                        </Typography>

                        {/* Card Footer */}
                    </CardContent>
                    <span style={{ display : 'flex'}}>
                        <Typography component="h6" variant="h6" align="right" style={{flexGrow : 1, paddingTop : '8px', fontSize : '1em'}}>
                                Responses
                        </Typography>
                        <IconButton 
                            onClick={this.handleExpandClick}
                            className={classnames(classes.expand, { [classes.expandOpen]: this.state.expanded, })}>
                            <ExpandMoreIcon/>
                        </IconButton>
                    </span>        
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <StupidResponses postId={_id} ownerId={strangerId} owner={strangerName} userVoted={userVoted}/>
                        </CardContent> 
                    </Collapse>
                </div>
            </Card>
        </Grid>
    );
    }
}


export default withStyles(Styles, { withTheme : true })(StupidPost);
