import React, { Component } from 'react';
import classnames from 'classnames';

class BadMain extends Component {
  render() {
    return (
      <x-bad-main class={classnames(this.props.badStyle, 'bad-main')}>Main</x-bad-main>
    );
  }
}

BadMain.defaultProps = {
  badStyle: 'good'
};


BadMain.propTypes = {
  badStyle: React.PropTypes.string
};
export default BadMain;
