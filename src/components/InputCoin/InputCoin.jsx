import PropTypes from 'prop-types';
import { Typography, Box, Button } from '@mui/material';
import { useStyles } from './style';

const InputCoin = props => {

	const { onClick, accessiblePrice, total } = props;

	const classes = useStyles();

	const money = [0.10, 0.20, 0.50, 1, 2, 5, 10, 20, 50, 100].map((coin) => (
		<Button
			key={coin}
			size='medium'
			variant="contained"
			disabled={(total - coin) < 0}
			onClick={() => onClick(coin)}
			sx={{ margin: 0.5 }}
		>
			{`${coin < 10 ? coin.toFixed(2) : coin}€`}
		</Button>

	));

	return (
		<Box>
			<Box className={classes.selectionCard}>
				<Typography>Money</Typography>
				<Typography>{`€${accessiblePrice.toFixed(2)}`}</Typography>
			</Box>
			<Box className={classes.buttonCard}>
				{money}
			</Box>
		</Box>
	);
};

InputCoin.propTypes = {
	onClick: PropTypes.func,
	accessiblePrice: PropTypes.number,
	total: PropTypes.number
};

export default InputCoin;