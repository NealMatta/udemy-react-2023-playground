import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
	// Creating an object out of a reducer will make it so that you can create multiple slices and then assign them all out. A way to keep the code clean
	// reducer: { counter: counterSlice.reducer },
	reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
