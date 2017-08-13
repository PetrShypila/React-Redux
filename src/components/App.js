import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AppBody from './AppBody';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header loading={this.props.loading}/>
        <AppBody/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, null, null, {pure:false})(App);
