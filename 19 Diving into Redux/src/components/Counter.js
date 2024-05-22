// useSelector helps us grab a part of the store
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	// React Redux automatically sets up a subscription to the Redux Store so you'll always have the latest state value
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	const dispatch = useDispatch();

	function decrementHandler() {
		dispatch({ type: 'decrement' });
	}

	const toggleCounterHandler = () => {
		dispatch({ type: 'toggle' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={() => dispatch({ type: 'increment', amount: 1 })}>Increment</button>
				<button onClick={() => dispatch({ type: 'increment', amount: 5 })}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;