// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Slice of your global state
const counterSlice = createSlice({
	name: 'counter',
	initialState: { counter: 0, showCounter: true },
	// Every method receives the current state
	// Don't need to write your own if checks
	reducers: {
		increment(state) {
			// Redux Toolkit lets us use mutable code and behind the scenes, it translates into immutable code
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const authSlice = createSlice({
	name: 'auth',
	initialState: { isAuthenticated: false },
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

const store = configureStore({
	// Creating an object out of a reducer will make it so that you can create multiple slices and then assign them all out. A way to keep the code clean
	// reducer: { counter: counterSlice.reducer },
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
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
