import { combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { featureFlagReducer } from '@confirma/config';

import { sharedApi } from '@confirma/shared/utils';

interface RootState {
  featureFlag: ReturnType<typeof featureFlagReducer>;
  [sharedApi.reducerPath]: ReturnType<typeof sharedApi.reducer>;
}
const reducers: ReducersMapObject<RootState> = {
  featureFlag: featureFlagReducer,
  [sharedApi.reducerPath]: sharedApi.reducer,
};
const combinedReducer: Reducer<RootState> = combineReducers(reducers);
export default combinedReducer;
