import * as ActionTypes from './ActionTypes';
import ITEMS from '../shared/items';
import fetch from 'cross-fetch';

import { baseUrl } from '../shared/baseUrl';
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

  return fetch(baseUrl + 'items')
    .then(response => response.json())
    .then(items => dispatch(addItems(items)));
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

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
