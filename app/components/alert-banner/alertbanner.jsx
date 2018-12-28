import React from 'react';

/*Material UI*/
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

/*Material UI Icons*/
// import WarningIcon from '@material-ui/icon/Warning';
// import ErrorIcon from '@material-ui/icons/Error';
// import InfoIcon from '@material-ui/icons/Info';
// import CloseIcon from '@material-ui/icons/Close';

/*Material UI Colors*/
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

/*Material UI Buttons */
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

/*Intergrate Styles*/
import { withStyles } from '@material-ui/core/styles';

// const Styles = theme => ({
//     success: {
//         backgroundColor: green[600],
//       },
//       error: {
//         backgroundColor: theme.palette.error.dark,
//       },
//       info: {
//         backgroundColor: theme.palette.primary.dark,
//       },
//       warning: {
//         backgroundColor: amber[700],
//       },
//       icon: {
//         fontSize: 20,
//       },
//       iconVariant: {
//         opacity: 0.9,
//         marginRight: theme.spacing.unit,
//       },
//       message: {
//         display: 'flex',
//         alignItems: 'center',
//       },
// });
const Styles = theme => ({});

let AlertBanner = (_props) => {
    return (
        <div>
            <span>Unsuccesful Login</span>
        </div>
    )
};

export default withStyles(Styles)(AlertBanner);