import React from 'react';
import Header from './Header';
import CommandBox from './CommandBox';

const Section = ({ command }) => {
  return (
    <div>
      <Header header={command.header} icon={command.icon} />
      <div>
        {command.items.map((command, index) => {
          return <CommandBox command={command} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Section;
