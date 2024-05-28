// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
	// Creating an object out of a reducer will make it so that you can create multiple slices and then assign them all out. A way to keep the code clean
	// reducer: { counter: counterSlice.reducer },
	reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// function counterReducer(state = initialState, action) {
// 	if (action.type === 'increment') {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'toggle') {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}

// 	return state;
// }

// const store = createStore(counterReducer);

// const counterSubscriber = () => {
// 	const latestState = store.getState();
// 	console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'increment' });
