import * as ActionTypes from './ActionTypes';

const addComment = (itemId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    itemId,
    rating,
    author,
    comment,
  },
});
export default addComment;
