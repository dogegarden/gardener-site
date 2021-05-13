import React from 'react';

const Bot = ({ bot }) => {
  return (
    <div className="card">
      <img src={bot.image} alt="profilePhoto"/>
      <h3>{ bot.displayName }</h3>
    </div>
  );
}
 
export default Bot;