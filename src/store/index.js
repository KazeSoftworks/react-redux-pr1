import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { counter: state.counter + action.amount };
		case 'DECREMENT':
			return { counter: state.counter - action.amount };
		default:
			return state;
	}
};

const store = createStore(
	counterReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
