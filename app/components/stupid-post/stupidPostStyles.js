const stupidPostStyles = theme => ({
    card : {
        display : 'flex',
        // background: 'grey'
    },
    cardContentLayout : {
        width : '100%'
    },
    cardDetails : {
        width :  '100%'
    },

    cardMedia : {
        width : 160
    },
    cardHead : {
        display : 'flex'
    },

    grow : {
        flexGrow : 1
    },

    greenDot : {
        borderRadius : '50%',
        width : 20,
        height : 20,
        backgroundColor : 'limegreen',
        marginTop : theme.spacing.unit / 4,
        marginLeft : theme.spacing.unit
    },

    redDot : {
        borderRadius : '50%',
        width : 20,
        height : 20,
        backgroundColor : 'orangered',
        marginTop : theme.spacing.unit / 4,
        marginLeft : theme.spacing.unit
    },

    votingEnable : {
        color : 'limegreen'
    },

    votingDisable : {
        color : 'red'
    },

    votingCaution: {
        color : 'yellow'
    },

    ownerTitle : {
        fontStyle : 'italic',
        flexGrow : 1
    },

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },

    expandOpen: {
        transform: 'rotate(180deg)',
    },

});

export default stupidPostStyles;