import { createStore } from 'redux';

import ITEMS from '../shared/items';
import COMMENTS from '../shared/comments';
import EMPLOYEES from '../shared/employees';

// this.state = {
//   items: ITEMS,
//   comments: COMMENTS,
//   employees: EMPLOYEES,
// };

export const initialState = {
  items: ITEMS,
  comments: COMMENTS,
  employees: EMPLOYEES,
};

export const configureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};

export const Reducer = (state = initialState, action) => {
  return state;
};
