import { combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { sharedApi } from '@confirma/shared/utils';

import authReducer from './slices/authSlice';

interface RootState {
  auth: ReturnType<typeof authReducer>;
  [sharedApi.reducerPath]: ReturnType<typeof sharedApi.reducer>;
}
const reducers: ReducersMapObject<RootState> = {
  auth: authReducer,
  [sharedApi.reducerPath]: sharedApi.reducer,
};
const combinedReducer: Reducer<RootState> = combineReducers({
  ...reducers,
});
export default combinedReducer;
