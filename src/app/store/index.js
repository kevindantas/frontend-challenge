import { configureStore } from '@reduxjs/toolkit';
import { accountApi } from '../../services/accountService';
import { colorApi } from '../../services/colorsService';
import { formSlice } from './formSlice';

export const getStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      form: formSlice.reducer,
      [colorApi.reducerPath]: colorApi.reducer,
      [accountApi.reducerPath]: accountApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(colorApi.middleware)
        .concat(accountApi.middleware),
    preloadedState,
  });

export const store = getStore();
