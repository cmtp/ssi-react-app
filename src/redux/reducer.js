
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

export const Reducer = (state = initialState, action) => {
  return state;
};
