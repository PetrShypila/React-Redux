import * as ACTIONS from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch (action.type) {

    case ACTIONS.LOAD_COURSES_SUCCESS:
      return action.courses;

    case ACTIONS.CREATE_COURSES_SUCCESS:
      return [...state, Object.assign({}, action.course)];

    case ACTIONS.UPDATE_COURSES_SUCCESS:
      return[...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)];

    default:
      return state;

  }
}
