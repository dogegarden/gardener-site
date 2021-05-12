import React from 'react';
import useDarkMode from '@hooks/useDarkMode'
import Switch from '@material-ui/core/Switch';

const DarkModeSwitch = () => {

  const [darkMode, setDarkMode] = useDarkMode();

  const handleCheck = (event) => {
        setDarkMode({ ...state, [event.target.name]: event.target.checked });
    };

  return (
    <div>
        <Switch
            checked={darkMode}
            onChange={handleCheck}
            color="grey"
            name="darkMode"
            inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <h3>Theme Preference: { theme }</h3>
    </div>
  );
}
 
export default DarkModeSwitch;

