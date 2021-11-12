import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter.store';

const Counter = () => {
	const dispatch = useDispatch();
	const { showCounter, counter } = useSelector((state) => state.counter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const incrementHandlerBy5 = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
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
