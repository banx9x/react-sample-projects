import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import productApi from 'services/product.services';
import productSlice from './slices/product.slice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [productSlice.name]: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
