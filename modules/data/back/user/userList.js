import React from 'react';
import User from './userDetails'
import { useQuery } from 'react-query'
import { getUsers } from '../../../api/userApi'

const Users = () => { 
   // Queries
  const {isLoading, isError, data, error} = useQuery('users', getUsers)

  if (isLoading) {
     return <span>Loading...</span>
   }
 
   if (isError) {
     return <span>Error: {error.message}</span>
   }

  return (
    <>
      <ul>
      { data.map((user) => {
          if (user) {
            return (
              <li key={user.githubId}>
                  <User user={user}/>
            </li>	
          )	
        }
        return null
      }) }
      </ul>
    </>
  );
}

export default Users