import React from 'react';
import CommandData from './Data';
import Section from './Section';

const List = () => {
  return (
    <div>
      {CommandData.map((command, index) => {
        const commandObject = {
          header: command.header,
          place: command.place,
          icon: command.icon,

          items: [command.items],
        };
        return <Section command={commandObject} key={index} />;
      })}
    </div>
  );
};

export default List;
