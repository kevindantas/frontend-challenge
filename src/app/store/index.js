import { configureStore } from '@reduxjs/toolkit';
import { colorApi } from '../../services/colorsService';

export const store = configureStore({
  reducer: {
    [colorApi.reducerPath]: colorApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(colorApi.middleware),
});
