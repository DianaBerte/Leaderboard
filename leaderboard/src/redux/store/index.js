import { configureStore, combineReducers } from '@reduxjs/toolkit';
import singlePlayerReducer from '../reducers/singlePlayerReducer';
import playersArrayReducer from '../reducers/playersArrayReducer';
import addPlayerToAddedListReducer from '../reducers/addPlayerToAddedListReducer';

const store = configureStore({
    reducer: combineReducers({
        singlePlayer: singlePlayerReducer,
        players: playersArrayReducer,
        addPlayerToAddedList: addPlayerToAddedListReducer,
    }),
})

export default store