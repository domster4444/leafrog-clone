import { configureStore } from '@reduxjs/toolkit';
//  import authReducer from authSlice
import authReducer from './features/authSlice';
export const store = configureStore({
  reducer: {
    //  Add the authReducer to the reducer object
    authUser: authReducer,
  },
  //  show the devTools only in development
  devTools: process.env.NODE_ENV !== 'production',
});

// concluding with the `RootState` and `AppDispatch` types from the store itself
//  means that they’ll correctly update as you add more state slices, API services or modify middleware settings.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
