import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
	if (action.type === 'increment') {
		return {
			counter: state.counter + action.amount,
		};
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
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
