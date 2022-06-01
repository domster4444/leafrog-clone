// If you’ve used Redux in the past you know Redux requires us to write all state updates immutably by making copies of the state and updating the copies.

// In Redux Toolkit we have the luxury to mutate any state directly.

// Redux Toolkits createSlice and createReducer APIs use Immer under the hood to allow us to write “mutating” update logic that eventually becomes immutable updates.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
  provider?: string;
  active?: boolean;
  verified?: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

interface AuthState {
  user?: IUser | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    //  Logout the user by returning the initial state
    logout: () => initialState,
    // Save the user's info
    userInfo: (state, action: PayloadAction<AuthState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload.user;
    },
  },
});

export const { logout, userInfo } = authSlice.actions;
//  Export the authSlice.reducer to be included in the store.
export default authSlice.reducer;
