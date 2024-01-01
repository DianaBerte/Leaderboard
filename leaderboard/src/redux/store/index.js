import { configureStore, combineReducers } from '@reduxjs/toolkit';
import singlePlayerReducer from '../reducers/singlePlayerReducer';
import playersArrayReducer from '../reducers/playersArrayReducer';
import addPlayerToAddedListReducer from '../reducers/addPlayerToAddedListReducer';
import increasePlayerScoreReducer from '../reducers/increasePlayerScoreReducer';
import decreasePlayerScoreReducer from '../reducers/decreasePlayerScoreReducer';

const store = configureStore({
    reducer: combineReducers({
        singlePlayer: singlePlayerReducer,
        players: playersArrayReducer,
        increasePlayerScore: increasePlayerScoreReducer,
        decreasePlayerScore: decreasePlayerScoreReducer,
        addPlayerToAddedList: addPlayerToAddedListReducer,
    }),
})

export default store