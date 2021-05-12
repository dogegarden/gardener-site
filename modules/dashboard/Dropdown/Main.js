import React from 'react';
import Navbar from './Navbar';
import Item from './Item';
import DropMenu from './DropMenu';
//Icons
import { ArrowForwardIosIcon as ForwardIcon } from '@material-ui/icons/ArrowForwardIos';

const Dropdown = () => {
  return (
    <Navbar>
      <Item icon={<ForwardIcon />}>
        <DropMenu></DropMenu>
      </Item>
    </Navbar>
  );
};

export default Dropdown;
