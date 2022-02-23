const CartState = {
	cartItems: [],
	total: 0,
};

export const CartReducer = (state = CartState, action) => {
	switch (action.type) {
		case 'AddToCart':
			const existingCartItem = state.cartItems.find(
				(x) => x.id == action.payload.id
			);

			// daha önceden sepete eklenmiş
			if (existingCartItem != undefined) {
				existingCartItem.quantity += 1;

				let _total = 0;

				state.cartItems.forEach((cartItem) => {
					_total += Number(cartItem.price) * Number(cartItem.quantity);
				});

				return {
					...state,
					cartItems: [...state.cartItems],
					total: _total,
				};
			} else {
				let newCartItems = [action.payload, ...state.cartItems];

				console.log('newCartItems', newCartItems);

				let _total = 0;

				newCartItems.forEach((cartItem) => {
					_total += Number(cartItem.price) * Number(cartItem.quantity);
				});

				return {
					...state,
					cartItems: [...newCartItems],
					total: _total,
				};
			}

		default:
			return state;
	}
};
