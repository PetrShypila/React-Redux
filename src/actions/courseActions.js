import * as ACTIONS from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from "./ajaxStatusActions";

export function loadCoursesSuccess(courses) {
  return { type: ACTIONS.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: ACTIONS.UPDATE_COURSES_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: ACTIONS.CREATE_COURSES_SUCCESS, course };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));

    }).catch(error => {
      throw(error);
    });

  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());

    return courseApi.saveCourse(course).then(savedCourse => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });

  };
}
