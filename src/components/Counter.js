import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	const incrementHandler = () => {
		dispatch({ type: 'INCREMENT', amount: 1 });
	};
	const incrementHandlerBy5 = () => {
		dispatch({ type: 'INCREMENT', amount: 5 });
	};

	const decrementHandler = () => {
		dispatch({ type: 'DECREMENT', amount: 1 });
	};

	const toggleCounterHandler = () => {
		dispatch({ type: 'TOGGLE' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && (
				<>
					<div className={classes.value}>{counter}</div>
					<div>
						<button onClick={incrementHandler}>Increment</button>
						<button onClick={incrementHandlerBy5}>Increment by 5</button>
						<button onClick={decrementHandler}>Decrement</button>
					</div>
				</>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
