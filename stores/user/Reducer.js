import {
   
} from './Constants'

const MainReducer = (state, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case GET_PROFILE: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case AUTHORIZE_USER:
            return {
                ...state,
                user: action.payload
            };
        case DELETE_USER:
            return {
                ...state,
                bots: state.bots.filter(bot => bot.id !== action.payload)
            };
        // case 'UPDATE_BOT':
        //     return {
        //         ...state,
        //         bots: action.payload
        //     }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };;
        default:
            return state;
    }
};


const RoomReducer = (state, action) => {
    switch (action.type) {
        case JOIN_ROOM:
            return {
            };
        case LEAVE_ROOM:
            return {
            };
        case ASK_TO_BE_SPEAKER:
            return {
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };;
        default:
            return state;
    }
};


const AudioReducer = (state, action) => {
    switch (action.type) {
        case PLAY:
            return {
            };
        case QUEUE:
            return {
            };
        case SKIP:
            return {
            };
        case SKIP_ALL:
            return {
            };
        case STOP: 
            return {
            };
        case GO_BACK: 
            return {
            };
        case REWIND:
            return {
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};



export { MainReducer, RoomReducer, AudioReducer }