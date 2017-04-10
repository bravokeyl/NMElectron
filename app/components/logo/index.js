import React from 'react';
import classnames from 'classnames';

import styles from './style.css';

const BadLogo = (props) => (
  <div className={classnames(props.badStyle, styles.logo)}>Nuevo Monit</div>
);

BadLogo.defaultProps = {
  badStyle: 'good'
};


BadLogo.propTypes = {
  badStyle: React.PropTypes.string
};


export default BadLogo;
