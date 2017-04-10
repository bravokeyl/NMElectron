import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './style.css';

const BadLink = (props) => (
  <li className={classnames(props.badStyle, styles.link)}>
    <Link to={props.path}>{props.name}</Link>
  </li>
);

BadLink.defaultProps = {
  badStyle: 'b',
  name: 'Badra',
  path: '/'
};


BadLink.propTypes = {
  badStyle: React.PropTypes.string,
  name: React.PropTypes.string,
  path: React.PropTypes.string
};


export default BadLink;
