import React, { Component } from 'react';
import classnames from 'classnames';

class BadHeader extends Component {
  render() {
    return (
      <x-bad-header class={classnames(this.props.badStyle, 'bad-header')}>Header</x-bad-header>
    );
  }
}

BadHeader.defaultProps = {
  badStyle: 'bad'
};


BadHeader.propTypes = {
  badStyle: React.PropTypes.string
};
export default BadHeader;
