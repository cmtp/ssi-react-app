import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { createForms } from 'react-redux-form';

import { Items } from './items';
import Comments from './comments';
import { Employees } from './employees';
import { InitialFeedback } from './form';

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      items: Items,
      comments: Comments,
      employees: Employees,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
export default ConfigureStore;
