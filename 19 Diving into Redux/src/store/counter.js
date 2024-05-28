import { createSlice } from '@reduxjs/toolkit';

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
