import React from 'react';

const Room = ({ room }) => {
  return (
    <div className="card">
      <h3>{room.name}</h3>
    </div>
  );
};

export default Room;
