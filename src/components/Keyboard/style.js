import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: 8,
	},
}));