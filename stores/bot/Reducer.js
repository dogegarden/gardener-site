import {
    SET_ERROR,
    //Main Reducer
    GET_BOTS,
    CREATE_BOT,
    DELETE_BOT,
    //Room Reducer
    JOIN_ROOM,
    LEAVE_ROOM,
    ASK_TO_BE_SPEAKER,
    //Audio Reducer
    PLAY,
    QUEUE,
    SKIP,
    SKIP_ALL,
    STOP,
    GO_BACK,
    REWIND,
} from './Constants'

const MainReducer = (state, action) => {
    switch (action.type) {
        case GET_BOTS:
            return {
                ...state,
                bots: action.payload
            };
        case CREATE_BOT:
            return {
                ...state,
                bots: state.bots.concat(action.payload)
            };
        case DELETE_BOT:
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