import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				counter: state.counter + action.amount,
				showCounter: state.showCounter,
			};
		case 'DECREMENT':
			return {
				counter: state.counter - action.amount,
				showCounter: state.showCounter,
			};
		case 'TOGGLE':
			return { counter: state.counter, showCounter: !state.showCounter };
		default:
			return state;
	}
};

const store = createStore(
	counterReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
