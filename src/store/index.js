import { configureStore } from '@reduxjs/toolkit';
import { apiCoffeeSlice } from '../api/apiCoffeeSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: { [apiCoffeeSlice.reducerPath]: apiCoffeeSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiCoffeeSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;