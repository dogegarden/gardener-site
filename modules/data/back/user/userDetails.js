import React from 'react';

const User = ({ user }) => {
  return (
    <div className="card">
      <img src={user.image} alt="profilePhoto"/>
      <h3>{ user.displayName }</h3>
      <h4>{user.githubId}</h4>
      <p>API Token - { user.apiToken }</p>
      <p>Bots: - {user.hasBots.map(bot => {
          if(bot) {
              return (
                <div key={bot.githubId}>
                    <img src={bot.image}/>
                    <h1>{data.displayName}</h1>
                </div>
                )
          }
      })}</p>
    </div>
  );
}
 
export default User;