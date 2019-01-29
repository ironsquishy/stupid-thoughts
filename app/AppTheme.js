import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    type :'dark',
    primary : {
      main : '#ffcc80'
    },
    secondary : {
      main : '#90caf9'
    },
    foreground : {
      main : 'grey'
    }
  },
  typography: {
    useNextVariants: true,
  },
});
export default theme;