export const AddToCart = (cartItem) => {
	return {
		type: 'AddToCart',
		payload: cartItem,
	};
};
