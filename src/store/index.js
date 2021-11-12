import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter = state.counter + 1;
		},
		decrement(state) {
			state.counter = state.counter - 1;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});
const store = configureStore({
	reducer: counterSlice.reducer,
	devTools: process.env.NODE_ENV !== 'production',
});

export const counterActions = counterSlice.actions;

export default store;
