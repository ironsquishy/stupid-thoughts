const CreatePostStyles = theme => ({
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
    
	card : {
		display : 'flex',
		background : theme.palette.grey[0]
	},
	cardContentLayout : {
		width : '100%'
	},
	cardDetails : {
		display : 'flex',
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
	textField: {
		width: '100%',
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	button: {
		float : 'right',
		margin: theme.spacing.unit,
	},
	countDownContent : {
		display: 'flex'
	}
  
});

export default CreatePostStyles;