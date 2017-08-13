import React from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      frame: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({  // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame > this.props.dots ? 0 : this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots--;
    }
    return <span>{text}&nbsp;</span>;
  }
}

LoadingDots.propTypes = {
  interval: PropTypes.number.isRequired,
  dots: PropTypes.number.isRequired
};

export default LoadingDots;
