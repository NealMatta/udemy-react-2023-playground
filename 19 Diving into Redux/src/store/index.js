import { createStore } from 'redux';
const initialState = { counter: 0, showCounter: true };

function counterReducer(state = initialState, action) {
	if (action.type === 'increment') {
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}

	if (action.type === 'toggle') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}

	return state;
}

const store = createStore(counterReducer);

// const counterSubscriber = () => {
// 	const latestState = store.getState();
// 	console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'increment' });

export default store;