import * as ACTIONS from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
  return { type: ACTIONS.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {

    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));

    }).catch(error => {
      throw(error);
    });

  };
}
