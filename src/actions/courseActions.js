import * as ACTIONS from './actionTypes';
import courseApi from '../api/mockCourseApi';

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
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));

    }).catch(error => {
      throw(error);
    });

  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });

  };
}
