import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TAuthSlice = {};

export const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearState: (state) => {
      state = initialState;
    },
    initialize: (state, action: PayloadAction) => {},
  },
});

export const { clearState, initialize } = authSlice.actions;

export default authSlice.reducer;
