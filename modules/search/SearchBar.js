import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      type="search"
      key="searchbar"
      value={keyword}
      placeholder={'search...'}
      onChange={e => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
