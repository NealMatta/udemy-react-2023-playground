// useSelector helps us grab a part of the store
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';
const Counter = () => {
	// React Redux automatically sets up a subscription to the Redux Store so you'll always have the latest state value
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const dispatch = useDispatch();

	function incrementHandler() {
		dispatch(counterActions.increment());
	}
	function increaseHandler() {
		dispatch(counterActions.increase(5));
	}

	function decrementHandler() {
		dispatch(counterActions.decrement());
	}

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
