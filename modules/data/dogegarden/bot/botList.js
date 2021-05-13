import { getRooms } from '@apiCalls/dogegarden/roomApi';
import React from 'react';
import Bot from './botDetails';

const Bots = () => {
  // Queries
  const { isLoading, isError, data, error } = useQuery('bots', getRooms);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data.map(bot => {
        if (bot) {
          return (
            <div key={index}>
              <Bot bot={bot} />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default Bots;
