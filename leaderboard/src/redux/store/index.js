import { configureStore, combineReducers } from '@reduxjs/toolkit';
import singlePlayerReducer from '../reducers/singlePlayerReducer';
import playersArrayReducer from '../reducers/playersArrayReducer';

const store = configureStore({
    reducer: combineReducers({
        singlePlayer: singlePlayerReducer,
        players: playersArrayReducer,
    }),
})

export default store