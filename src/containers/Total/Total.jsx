import { useContext } from 'react';
import { CartContext } from '../../App';
import { Typography, Box } from '@mui/material';
import { useStyles } from './style';

const Total = () => {

	const { data } = useContext(CartContext);

	const classes = useStyles();

	return (
		<Box className={classes.root} sx={{}}>
			<Typography sx={{ marginLeft: 1 }}>{`€${data.amount.toFixed(2)}`}</Typography>
			<Typography>Total:</Typography>
		</Box>
	);
};

export default Total;