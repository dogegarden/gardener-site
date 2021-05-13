import React from 'react';
import { Users, Bots, Rooms } from '../data';

const DataList = ({ entity, dataList }) => {
  switch (entity) {
    case 'users':
      return <Users userList={dataList} />;
    case 'bots':
      return <Bots botList={dataList} />;
    case 'rooms':
      return <Rooms roomList={dataList} />;
  }
};

export default DataList;
