import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
