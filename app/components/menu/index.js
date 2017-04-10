import React from 'react';
import classnames from 'classnames';

import BadLink from './link';
import styles from './style.css';

const BadMenu = (props) => {
  const links = [
    { name: 'Overview', index: 0 },
    { name: 'Settings', index: 1 },
    { name: 'Reports', index: 2 },
  ];
  const menuItems = links.map((e) =>
    <BadLink name={e.name} key={e.index} />
  );
  return (
    <ul className={classnames(props.badStyle, styles.menu)}>
      {menuItems}
    </ul>
  );
};

BadMenu.defaultProps = {
  badStyle: 'b'
};


BadMenu.propTypes = {
  badStyle: React.PropTypes.string
};


export default BadMenu;
