import React from 'react';
import Switch from '@material-ui/core/Switch';

const CommandBox = ({ command }) => {
  const [commandOn, setCommandOn] = useState(command.defaultSwitch);

  return (
    <div>
      <div>{command.title}</div>
      <Switch
        checked={commandOn}
        onChange={setCommandOn}
        color="red"
        name="command"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <div>{command.description}</div>
    </div>
  );
};

export default CommandBox;
