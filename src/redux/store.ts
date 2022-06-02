import { configureStore } from '@reduxjs/toolkit';
import postReducer from 'redux/features/postSlice';

import { postApi } from 'redux/api/post/postApi';

export const store = configureStore({
  reducer: {
    //? REDUX-TOOLKIT-STATE
    //  Add the authReducer to the reducer object

    //todo: these names authUser,userPosts are representative names,chhose wisely
    //todo: while loggin state of useSelector we got , state={
    //todo:   userPosts: initialStateName:value
    //todo:  }

    userPosts: postReducer,
    //? REDUX-RTK-QUERY-STATE
    [postApi.reducerPath]: postApi.reducer,
  },
  //  show the devTools only in development
  devTools: process.env.NODE_ENV !== 'production',
});

// concluding with the `RootState` and `AppDispatch` types from the store itself
//  means that they’ll correctly update as you add more state slices, API services or modify middleware settings.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
