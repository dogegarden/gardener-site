import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Drop.module.css';

const Drop = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavLink
        activeClassName={styles.sidebarLinkActive}
        className={styles.sidebarLink}
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <span classname={styles.sidebarLabel}>{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <NavLink
              activeClassName={styles.dropdownLinkActive}
              className={styles.dropdownLink}
              to={item.path}
              key={index}
            >
              {item.icon}
              <span
                activeClassName={styles.sidebarLabelActive}
                className={sidebarLabel}
              >
                {item.title}
              </span>
            </NavLink>
          );
        })}
    </>
  );
};

export default Drop;
