

const homeStyles = theme => ({
    layout: {
        width: 'auto',
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      textPrimary: {
        color : '#ffcc80'
      },
      flex : {
        display : 'flex'
      },
      categoryText : {
        color : '#ffcc80',
        flexGrow : 1
      }
});



export default homeStyles;