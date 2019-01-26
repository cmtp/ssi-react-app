import { combineReducers, createStore } from 'redux';
import { Items } from './items';
import Comments from './comments';
import { Employees } from './employees';

const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      items: Items,
      comments: Comments,
      employees: Employees,
    })
  );

  return store;
};
export default ConfigureStore;
