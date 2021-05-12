import React from 'react';
import User from './userDetails';
import { useQuery } from 'react-query';
import { getProfile } from '../../../api/userApi';

const CurrentUser = () => {
  // Queries
  const { isLoading, isError, data, error } = useQuery(
    'currentUser',
    getProfile
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <User user={data} />
    </div>
  );
};

export default CurrentUser;
