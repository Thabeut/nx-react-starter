import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeatureFlagsEnum } from '../constants';

interface IFeatureFlagState {
  flags: Record<FeatureFlagsEnum, boolean> | null;
}

export const initialState: IFeatureFlagState = {
  flags: null,
};

export const featureFlagSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeFlags(
      state,
      action: PayloadAction<Record<FeatureFlagsEnum, boolean> | null>
    ) {
      state.flags = action.payload;
    },
  },
});
export const { initializeFlags } = featureFlagSlice.actions;
export default featureFlagSlice.reducer;
