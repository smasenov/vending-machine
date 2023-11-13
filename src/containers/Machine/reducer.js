export const productsReducer = (state, action) => {

	const { products, itemNumber, updateAmount, accessiblePrice } = action;

	switch (action.type) {
		case 'add':
			return state.concat(products);
		case 'buy':
			return state.map(product => {
				if ((product.id === itemNumber) && (product.quantity > 0) && accessiblePrice >= product.price) {
					updateAmount(product.price);
					return ({ ...product, quantity: product.quantity - 1 });
				} else {
					if (product.id === itemNumber) {
						updateAmount(0);
					}
					return product;
				}
			});
		case 'empty':
			return [];
		default:
	}
};
