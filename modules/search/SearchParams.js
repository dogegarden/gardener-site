import {
  getUsers,
  getUserBots,
  getProfileBots,
  getRooms,
  getProfileBots,
} from '@apiCalls';

const SearchParams = type => {
  let type;
  let queryFunction;

  switch (type) {
    case 'allUsers':
      type = users;
      queryFunction = getUsers;
    case 'allUserBots':
      type = bots;
      queryFunctions = getUserBots;
    case 'allProfileBots':
      type = bots;
      queryFunction = getProfileBots;
    case 'allRooms':
      type = rooms;
      queryFunction = getRooms;
    //   case 'roomUsers':
    //     type = users
    //     queryFunction = getRoomUsers
  }

  return { type, queryFunction };
};

export default SearchParams;
