import React from 'react';
import classnames from 'classnames';

import styles from './style.css';

const BadLink = (props) => (
  <li className={classnames(props.badStyle, styles.link)}>
    <a href="">{props.name}</a>
  </li>
);

BadLink.defaultProps = {
  badStyle: 'b',
  name: 'Badra'
};


BadLink.propTypes = {
  badStyle: React.PropTypes.string,
  name: React.PropTypes.string
};


export default BadLink;
