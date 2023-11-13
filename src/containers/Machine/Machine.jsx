import { useState, useContext, useReducer, useEffect } from 'react';
import { Card, CardContent, Button, Typography, Box } from '@mui/material';
import { SlotItem, Keyboard, InputCoin } from '../../components';
import { CartContext } from '../../App';
import { useStyles } from './style';
import { products } from '../../data';
import { productsReducer } from './reducer';

const isArray = value => (typeof value === 'object' && Array.isArray(value));
const isFullArray = value => (isArray(value) && !!value.length);

const Machine = () => {

	const classes = useStyles();

	const [machineProducts, dispatchMachineProducts] = useReducer(productsReducer, []);

	const { data, setData } = useContext(CartContext);

	const [itemNumber, setItemNumber] = useState(0);

	const [selectedItemPrice, setSelectedItemPrice] = useState(null);

	const [accessiblePrice, setAccessiblePrice] = useState(0);

	const updateAmount = num => setSelectedItemPrice(num);

	useEffect(() => {
		dispatchMachineProducts({ type: 'empty' });
		dispatchMachineProducts({
			type: 'add',
			products: products,
		});
	}, []);

	useEffect(() => {
		if (selectedItemPrice !== null) {
			setData(prevData => ({ ...prevData, amount: prevData.amount + accessiblePrice - selectedItemPrice }));
			setSelectedItemPrice(null);
			setItemNumber(0);
			setAccessiblePrice(0);
		}
	}, [selectedItemPrice, accessiblePrice, setData]);

	const handleKeyboardClick = number => {
		setItemNumber(itemNumber * 10 + number);
	};

	const handleMoneyInput = amount => {
		setData(prevData => ({ ...prevData, amount: prevData.amount - amount }));
		setAccessiblePrice(prevAmount => prevAmount + amount);
	};

	const handleReset = () => {
		setItemNumber(0);
		setAccessiblePrice(0);
		setData(prevData => ({ ...prevData, amount: prevData.amount + accessiblePrice }));
	};

	const handleBuy = () => {
		dispatchMachineProducts({
			type: 'buy',
			products: products,
			itemNumber: itemNumber,
			updateAmount: updateAmount,
			accessiblePrice: accessiblePrice
		});
	};

	const cardProducts = isFullArray(machineProducts) && machineProducts.map(product => (
		<SlotItem
			key={product.id}
			name={product.name}
			itemNumber={product.id}
			quantity={product.quantity}
			productImage={product.productImageUrl}
			price={product.price}
		/>
	));

	return (
		<Card className={classes.root}>
			<CardContent className={classes.itemCardContent}>
				{cardProducts}
			</CardContent>
			<CardContent className={classes.inputCard}>
				<Box className={classes.selectionCard}>
					<Typography>Selected item</Typography>
					<Typography>{itemNumber}</Typography>
				</Box>
				<Keyboard
					itemNumber={itemNumber}
					onClick={handleKeyboardClick}
				/>
				<Box>
					<Button disabled={itemNumber === 0 || accessiblePrice < Math.min(...products.map(product => product.price))} onClick={handleBuy}>Buy</Button>
					<Button disabled={itemNumber === 0 && accessiblePrice === 0} onClick={handleReset}>Reset</Button>
				</Box>
				<InputCoin total={data.amount} onClick={handleMoneyInput} accessiblePrice={accessiblePrice} />
			</CardContent>
		</Card>
	);
};

export default Machine;