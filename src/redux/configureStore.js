import { createStore } from 'redux';
import { Reducer } from './reducer';
import { initialState } from './reducer';

export const configureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
