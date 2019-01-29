import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { Items } from './items';
import Comments from './comments';
import { Employees } from './employees';

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      items: Items,
      comments: Comments,
      employees: Employees,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
export default ConfigureStore;
