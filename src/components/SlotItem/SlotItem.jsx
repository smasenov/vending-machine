import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useStyles } from './style';

const emptySlotImgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IQjPOaJwyRNq9Q6Gljej3LxRfDqV4fsWTiSNEHEiooEuGNRRCQ";


const SlotItem = props => {

	const classes = useStyles();

	const { price, itemNumber, name, productImage, quantity } = props;

	return (
		<Box className={classes.root}>
			<img className={classes.img} src={quantity > 0 ? productImage : emptySlotImgUrl} />
			{`x${quantity}`}
			<Typography className={classes.name}>{name}</Typography>
			<Box className={classes.numberCard}>
				<Box className={classes.itemNumber}>{itemNumber}</Box>
				<Box className={classes.price}>{`€${price.toFixed(2)}`}</Box>
			</Box>
		</Box>
	);

};

SlotItem.propTypes = {
	price: PropTypes.number,
	itemNumber: PropTypes.number,
	name: PropTypes.string,
	productImage: PropTypes.string,
	quantity: PropTypes.number
};

export default SlotItem;