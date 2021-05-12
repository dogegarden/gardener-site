import React, { useState } from 'react';
import styles from './Item.module.css';

const Item = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <li className={styles.navItem}>
      <a href="#" className={styles.iconButton} onClick={handleClick}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};

export default Item;
