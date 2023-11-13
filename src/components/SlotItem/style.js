import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {
		minWidth: '100px',
		fontSize: '11px',
		border: '1px solid #424242',
		marginLeft: '2px',
		marginTop: '2px',
	},
	img: {
		height: '60px',
		width: '60px',
		flexGrow: 1,
		objectFit: 'scale-down'
	},
	name: {
		textAlign: 'center'
	},
	numberCard: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemNumber: {
		marginRight: '12px',
	},
	price: {
		borderRadius: '22%',
		backgroundColor: '#eeeeee',
		padding: '1px 2px',
		margin: '6px'
	},
}));