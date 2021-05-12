import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { SidebarData } from './Data';
import Drop from './Drop';
import styles from './Sidebar.module.css';

const SidebarNav = () => {
  return (
    <>
      <div className={styles.Nav}>
        <Link to="#" className={styles.NavIcon}>
          <MenuIcon />
        </Link>
      </div>
      <nav className={styles.sidebarNav}>
        <div className={styles.sidebarWrap}>
          <Link to="#" className={styles.NavIcon}>
            <CloseIcon />
          </Link>
          {SidebarData.map((item, index) => {
            return <Drop item={item} key={index} />;
          })}
        </div>
      </nav>
    </>
  );
};

export default SidebarNav;
