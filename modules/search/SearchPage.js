import React from 'react';
import SearchBar from './SearchBar';
import useSearch from '@hooks/useSearch';
import SearchParams from './SearchParams';
import DataList from './DataList';

const SearchPage = ({ type }) => {
  const [isLoading, isError, dataList, input, updateInput, entity] = useSearch(
    SearchParams(type)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1>SearchBar</h1>
      <SearchBar input={input} onChange={updateInput} />
      <DataList dataList={dataList} entity={entity} />
    </>
  );
};

export default SearchPage;
