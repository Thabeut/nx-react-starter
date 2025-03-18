import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { sharedApi } from '@confirma/shared/utils';

import { axios } from '@confirma/packages';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: !!import.meta.env.VITE_APP_ENABLE_REDUX_DEVTOOLS || false,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: axios,
      },
      serializableCheck: false,
    }).concat([sharedApi.middleware]),
  ],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
