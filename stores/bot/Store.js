import React, {createContext, useReducer} from "react";
import {MainReducer, RoomReducer, AudioReducer} from './Reducer'
import Combiner from '../Combiner'

const initialState = {
    MainReducer: {
        bots: [],
        error: null
    },
    RoomReducer: {
        
    },
    AudioReducer: {

    }
};

const rootReducer = Combiner({MainReducer, RoomReducer, AudioReducer})

const Store = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const store = React.useMemo(() => [state, dispatch], [state]);
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;