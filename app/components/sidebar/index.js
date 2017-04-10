import React, { Component } from 'react';
import classnames from 'classnames';

import BadLogo from '../logo';
import BadMenu from '../menu';

class BadSidebar extends Component {
  render() {
    return (
      <x-bad-sidebar class={classnames(this.props.badStyle, 'bad-sidebar')}>
        <BadLogo />
        <BadMenu />
      </x-bad-sidebar>
    );
  }
}

BadSidebar.defaultProps = {
  badStyle: 'good'
};


BadSidebar.propTypes = {
  badStyle: React.PropTypes.string
};
export default BadSidebar;
