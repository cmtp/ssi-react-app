import * as ActionTypes from './ActionTypes';
import ITEMS from '../shared/items';

export const addComment = (itemId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    itemId,
    rating,
    author,
    comment,
  },
});

// Este es un thunk
// El thunk permite llamar a diferentes actions al mismo tiempo
// podemos agregar logica del negocio aca.
export const fetchItems = () => dispatch => {
  dispatch(itemsLoading(true));

  setTimeout(() => {
    //pondra los items al store
    dispatch(addItems(ITEMS));
  }, 2000);
};

export const itemsLoading = () => ({
  type: ActionTypes.ITEMS_LOADING,
});

export const itemsFailed = errmess => ({
  type: ActionTypes.ITEMS_FAILED,
  payload: errmess,
});

export const addItems = items => ({
  type: ActionTypes.ADD_ITEMS,
  payload: items,
});
