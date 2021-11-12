import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: false, isAuthenticated: false };

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
