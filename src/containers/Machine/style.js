import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
	},
	itemCardContent: {
		width: '400px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	inputCard: {
		display: 'flex',
		justifyContent: 'center',
		rowGap: '8px',
		flexDirection: 'column',
		marginTop: '2px',
		alignSelf: 'flex-start',
		'&.MuiCardContent-root': {
			paddingLeft: '0px',
		}
	},
	selectionCard: {
		display: 'flex',
		justifyContent: 'space-between',
		minWidth: '130px',
		padding: '12px',
		borderRadius: '4px',
		border: '1px solid #424242',
	},
	selectedItem: {
		minWidth: '122px'
	}
}));