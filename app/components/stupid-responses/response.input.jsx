import React from 'react';

/*Material UI*/
import Typogaphy from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

/*Styles*/
import { ResponseInputStyles } from './response.styles';

class StupidResponseInput extends React.Component{
    constructor(_props) {
        super(_props);

        this.state = {
            responseMessage : ''
        };

        this.handleResponseChange = this.handleResponseChange.bind(this);
        this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
        this.handleKeyPressChanges = this.handleKeyPressChanges.bind(this);
    }

    handleResponseChange(e){
        this.setState({ responseMessage : e.target.value});
    }

    handleKeyPressChanges(e){
        if( e.charCode == 10 || e.charCode == 13){
            this.handleResponseSubmit(e);
        }
    }

    handleResponseSubmit(e){
        e.preventDefault();


        if( this.props.handleSubmit){
            this.props.handleSubmit(this.state.responseMessage);
            this.setState({ responseMessage : ''});
        }
    }

    render(){
        const { classes } = this.props;
           return (
            <React.Fragment>
                <form noValidate autoComplete="off" onSubmit={this.handleResponseSubmit}>
                    <TextField
                        multiline
                        label="Your Response?"
                        variant="outlined"
                        value={this.state.responseMessage}
                        onChange={this.handleResponseChange}
                        onKeyPress={this.handleKeyPressChanges}
                        className={classes.textField}
                    >
                    </TextField>
                    <Button
                        type="submit"
                        name="submit"
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </form>
            </React.Fragment>
           ); 
    }
}

export default withStyles(ResponseInputStyles, { withTheme : true })(StupidResponseInput);