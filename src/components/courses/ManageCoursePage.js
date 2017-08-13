import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from "./CourseForm";
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          course: Object.assign({}, props.course),
          errors: {},
          saving: false
        };

        this.updateCourseForm = this.updateCourseForm.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
      if(this.props.course.id !== nextProps.course.id) {
        this.setState({course: Object.assign({}, nextProps.course)});
      }
    }

    updateCourseForm(event){
      const field = event.target.name;
      let course = Object.assign({}, this.state.course);
      course[field] = event.target.value;

      return this.setState({course});
    }

    saveCourse(event){
      event.preventDefault();
      this.setState({saving: true});
      this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
          this.setState({saving: false});
          toastr.error(error);
        });

    }

    redirect() {
      this.setState({saving: false});
      toastr.success('Course saved!');
      this.props.history.push('/courses');
    }

    render() {
        return (
          <div>
            <h1>Manage Course</h1>
            <CourseForm
              course={this.state.course}
              errors={this.state.errors}
              saving={this.state.saving}
              allAuthors={this.props.authors}
              onChange={this.updateCourseForm}
              onSave={this.saveCourse} />
          </div>
        );
    }
}

ManageCoursePage.propTypes = {
  course:  PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

function getCourseById(courses, courseId) {
  const targetCourse = courses.filter(course => course.id === courseId);

  if(targetCourse.length) return targetCourse[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id;
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course,
    authors: authorFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
