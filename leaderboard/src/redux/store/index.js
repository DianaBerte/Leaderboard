import { configureStore, combineReducers } from '@reduxjs/toolkit';
import singlePlayerReducer from '../reducers/singlePlayerReducer';
import playersArrayReducer from '../reducers/playersArrayReducer';
import addPlayerToAddedListReducer from '../reducers/addPlayerToAddedListReducer';
import playerScoreReducer from '../reducers/playerScoreReducer';

const store = configureStore({
    reducer: combineReducers({
        singlePlayer: singlePlayerReducer,
        players: playersArrayReducer,
        playerScore: playerScoreReducer,
        addPlayerToAddedList: addPlayerToAddedListReducer,
    }),
})

export default store