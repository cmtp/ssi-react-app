import * as ActionTypes from './ActionTypes';
import fetch from 'cross-fetch';
import { baseUrl } from '../shared/baseUrl';

export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

// Este es un thunk
// El thunk permite llamar a diferentes actions al mismo tiempo
// podemos agregar logica del negocio aca.
export const fetchItems = () => dispatch => {
  dispatch(itemsLoading(true));

  return fetch(baseUrl + 'items')
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        let error = new Error(
          'Error ' + response.status + ': ' + response.statusText
        );
        error.response = response;
        throw error;
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(items => dispatch(addItems(items)))
    .catch(error => dispatch(itemsFailed(error.message)));
};

export const fetchEmployees = () => dispatch => {
  dispatch(employeesLoading(true));

  return fetch(baseUrl + 'employees')
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        let error = new Error(
          'Error ' + response.status + ': ' + response.statusText
        );
        error.response = response;
        throw error;
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(employees => dispatch(addEmployees(employees)))
    .catch(error => dispatch(employeesFailed(error.message)));
};

export const itemsLoading = () => ({
  type: ActionTypes.ITEMS_LOADING,
});

export const itemsFailed = errmess => ({
  type: ActionTypes.ITEMS_FAILED,
  payload: errmess,
});

export const employeesLoading = () => ({
  type: ActionTypes.ITEMS_LOADING,
});

export const employeesFailed = errmess => ({
  type: ActionTypes.EMPLOYEES_FAILED,
  payload: errmess,
});

export const addItems = items => ({
  type: ActionTypes.ADD_ITEMS,
  payload: items,
});

export const addEmployees = employees => ({
  type: ActionTypes.ADD_EMPLOYEES,
  payload: employees,
});

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + 'comments')
    .then(
      response => {
        if (response.ok) {
          return response;
        }
        var error = new Error(
          'Error ' + response.status + ': ' + response.statusText
        );
        error.response = response;
        throw error;
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const postComment = (itemId, rating, author, comment) => dispatch => {
  const newComment = {
    itemId: itemId,
    rating: rating,

    author: author,
    comment: comment,
  };
  newComment.date = new Date().toISOString();
  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            'Error ' + response.status + ': ' + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log('post comments', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
    });
};
