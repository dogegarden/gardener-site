import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{children}</ul>
    </nav>
  );
};

export default Navbar;
