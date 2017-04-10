import React from 'react';
import classnames from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';

import BadLink from './link';
import styles from './style.css';

const BadMenu = (props) => {
  const links = [
    {
      name: 'Overview',
      index: 0,
      path: '/',
      component: 'Overview'
    },
    {
      name: 'Settings',
      index: 1,
      path: '/settings',
      component: 'Settings'
    },
    {
      name: 'Reports',
      index: 2,
      path: '/reports',
      component: 'Reports'
    },
  ];

  const menuItems = links.map((e) =>
    <BadLink name={e.name} path={e.path} key={e.index} />
  );

  return (
    <Router>
      <div>
        <ul className={classnames(props.badStyle, styles.menu)}>
          {menuItems}
        </ul>
      </div>
    </Router>
  );
};

BadMenu.defaultProps = {
  badStyle: 'b'
};


BadMenu.propTypes = {
  badStyle: React.PropTypes.string
};


export default BadMenu;
