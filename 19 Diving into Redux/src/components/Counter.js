// useSelector helps us grab a part of the store
import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	// React Redux automatically sets up a subscription to the Redux Store so you'll always have the latest state value
	const counter = useSelector((state) => state.counter);
	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
