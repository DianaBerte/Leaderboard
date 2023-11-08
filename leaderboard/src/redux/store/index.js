import { configureStore, combineReducers } from '@reduxjs/toolkit';
import playerReducer from '../reducers/playerReducer';

const store = configureStore({
    reducer: combineReducers({
        player: playerReducer,
        //and any other reducers here <-- 
    }),
})

export default store