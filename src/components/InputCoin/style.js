import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {},
	selectionCard: {
		display: 'flex',
		justifyContent: 'space-between',
		minWidth: '130px',
		padding: '12px',
		borderRadius: '4px',
		border: '1px solid #424242',
	},
	buttonCard: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: 8,
	}
}));