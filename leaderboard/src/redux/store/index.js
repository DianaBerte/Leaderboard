import { configureStore, combineReducers } from '@reduxjs/toolkit';
import singlePlayerReducer from '../reducers/singlePlayerReducer';
import playersReducer from '../reducers/playersReducer';

const store = configureStore({
    reducer: combineReducers({
        singlePlayer: singlePlayerReducer,
        multiplePlayers: playersReducer,
    }),
})

export default store