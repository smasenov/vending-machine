import PropTypes from 'prop-types';
import { IconButton, Box } from '@mui/material';
import { useStyles } from './style';

const Keyboard = props => {

	const { onClick, itemNumber } = props;

	const classes = useStyles();

	const buttonKeyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
		<IconButton
			key={number}
			size='medium'
			disabled={itemNumber === 1 ? number > 5 : itemNumber > 1}
			onClick={() => onClick(number)}
			sx={{ margin: 0.5, minWidth: 1 }}
		>
			{number}
		</IconButton>
	));

	return (
		<Box className={classes.root}>
			{buttonKeyboard}
		</Box>
	);
};

Keyboard.propTypes = {
	onClick: PropTypes.func,
	itemNumber: PropTypes.number
};

export default Keyboard;