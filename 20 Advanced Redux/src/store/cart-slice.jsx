import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialState = {
	items: [],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity--;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		},
	},
});

export function sendCartData(cart) {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: 'pending',
				title: 'Sending ... ',
				message: 'Sending Cart Data!',
			})
		);

		async function sendRequest() {
			const response = await fetch('https://udemy-react-course-1fea8-default-rtdb.firebaseio.com/cart.json', {
				method: 'PUT',
				body: JSON.stringify(cart),
			});

			if (!response.ok) {
				throw new Error('Sending Cart Data Failed');
			}
		}

		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success! ... ',
					message: 'Sent Cart Data Succesfully!',
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error! ',
					message: 'Error happened',
				})
			);
		}
	};
}
export default cartSlice;
export const cartActions = cartSlice.actions;
