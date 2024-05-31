import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { uiActions } from './store/ui-slice';

import Notification from './components/UI/Notification';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: 'pending',
					title: 'Sending ... ',
					message: 'Sending Cart Data!',
				})
			);
			const response = await fetch('https://udemy-react-course-1fea8-default-rtdb.firebaseio.com/cart.json', {
				method: 'PUT',
				body: JSON.stringify(cart),
			});

			if (!response.ok) {
				throw new Error('Sending Cart Data Failed');
			}

			dispatch(
				uiActions.showNotification({
					status: 'success',
					title: 'Success! ... ',
					message: 'Sent Cart Data Succesfully!',
				})
			);
		};

		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartData().catch((error) => {
			dispatch(
				uiActions.showNotification({
					status: 'error',
					title: 'Error! ',
					message: 'Error happened',
				})
			);
		});
	}, [cart, dispatch]);

	return (
		<>
			{notification && (
				<Notification status={notification.status} title={notification.title} message={notification.message} />
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
