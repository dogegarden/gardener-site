import React from 'react';
import Bot from './botDetails';
import getProfileBots from '@apiCalls/back/userApi'

const Bots = () => { 
   // Queries
  const {isLoading, isError, data, error} = useQuery('bots', getProfileBots)

  if (isLoading) {
     return <span>Loading...</span>
   }
 
   if (isError) {
     return <span>Error: {error.message}</span>
   }

  return (
    <>
    { data.map((bot, index) => {
        if (bot) {
          return (
            <div key={index}>
              <Bot bot={bot}/>
	        </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Bots