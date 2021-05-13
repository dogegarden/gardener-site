import React from 'react';
import User from './userDetails';
import { useQuery } from 'react-query';
import { getUser } from '../../../api/userApi';

const UserID = ({ queryKey }) => {
  // Queries
  const { isLoading, isError, data, error } = useQuery(
    'user',
    getUser(queryKey)
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

export default UserID;
