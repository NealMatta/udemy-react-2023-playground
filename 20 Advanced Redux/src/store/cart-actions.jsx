import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export function fetchCartData() {
	return async (dispatch) => {
		async function fetchData() {
			const response = await fetch('https://udemy-react-course-1fea8-default-rtdb.firebaseio.com/cart.json');
			if (!response.ok) {
				throw new Error('Could not fetch Cart Data');
			}

			const data = await response.json();

			return data;
		}

		try {
			const cartData = await fetchData();
			dispatch(cartActions.replaceCart(cartData));
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error! ',
					message: 'Fetching Cart Data Failsed',
				})
			);
		}
	};
}

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
