import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit';
import { baseApi } from 'shared/api';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    ...options,
  });

export const store = createStore();
