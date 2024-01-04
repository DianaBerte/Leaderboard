import { configureStore, combineReducers } from '@reduxjs/toolkit';
import singlePlayerReducer from '../reducers/singlePlayerReducer';
import playersArrayReducer from '../reducers/playersArrayReducer';
import addPlayerToAddedListReducer from '../reducers/addPlayerToAddedListReducer';
import playerScoreReducer from '../reducers/playerScoreReducer';
import playerInfoReducer from '../reducers/playerInfoReducer';

const store = configureStore({
    reducer: combineReducers({
        singlePlayer: singlePlayerReducer,
        players: playersArrayReducer,
        playerScore: playerScoreReducer,
        playerInfo: playerInfoReducer,
        addPlayerToAddedList: addPlayerToAddedListReducer,
    }),
})

export default store