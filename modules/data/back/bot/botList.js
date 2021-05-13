import React from 'react';
import Bot from './botDetails';
import getBot from '@apiCalls/back/botApi'
 
const Bots = () => { 
   // Queries
  const {isLoading, isError, data, error} = useQuery('bots', getBot)

  if (isLoading) {
     return <span>Loading...</span>
   }
 
   if (isError) {
     return <span>Error: {error.message}</span>
   }

  return (
    <>
    { data.map((bot) => {
        if (bot) {
          return (
            <div key={bot._id}>
              <Bot bot={bot.displayName}/>
	        </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Bots