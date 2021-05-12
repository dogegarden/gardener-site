import { useState, useEffect } from 'react';

const useMenuHeight = () => {
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  return { menuHeight, dropdownRef, setMenuHeight };
};

export default useMenuHeight;
