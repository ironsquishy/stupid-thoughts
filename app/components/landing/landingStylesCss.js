
const LandingStyles = theme => ({
    heroContainer : {
        background: 'linear-gradient(to right bottom, #ffffff, #f0f0f0)'
    },

    heroContent : {
        maxWidth : 600,
        margin : '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons : {
            marginTop : theme.spacing.unit * 2,
            marginBottom : theme.spacing.unit * 2
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },

});

export default LandingStyles;





