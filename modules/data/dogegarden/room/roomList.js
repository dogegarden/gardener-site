import { getRooms } from '@apiCalls/dogegarden/roomApi';
import React from 'react';
import Room from './roomDetails';

const Rooms = () => {
  // Queries
  const { isLoading, isError, data, error } = useQuery('rooms', getRooms);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data.map(room, index => {
        if (room) {
          return (
            <div key={index}>
              <Room room={room} />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default Rooms;
