import { CartService } from '../../services/cart.service';

const CartState = {
	cartItems: [],
	total: 0,
};

export const CartReducer = (state = CartState, action) => {
	console.log('action', action);

	switch (action.type) {
		case 'AddToCart':
			const cartObject1 = CartService.AddToCart(
				action.payload,
				state.cartItems
			);

			return {
				...state,
				cartItems: cartObject1.cartItems,
				total: cartObject1.total,
			};
		case 'RemoveFromCart':
			const cartObject2 = CartService.RemoveFromCart(
				action.payload.id,
				state.cartItems
			);

			return {
				...state,
				cartItems: cartObject2.cartItems,
				total: cartObject2.total,
			};
		case 'ClearFromCart':
			return {

				cartItems: [],
				total: 0
			}

		case 'DiscountQuantity':
			const cartObject3=CartService.DiscountQuantity(
				action.payload.id,
				state.cartItems
			)
			return {
				...state,
				cartItems:cartObject3.cartItems,
				total:cartObject3.total
			}	
		default:
			return state;
	}
};
