import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.store';
import authReducer from './auth.store';

const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
