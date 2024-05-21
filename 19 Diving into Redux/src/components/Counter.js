// useSelector helps us grab a part of the store
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	// React Redux automatically sets up a subscription to the Redux Store so you'll always have the latest state value
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const toggleCounterHandler = () => {};

	function decrementHandler() {
		dispatch({ type: 'decrement' });
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
