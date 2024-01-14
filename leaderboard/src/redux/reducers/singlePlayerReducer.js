import { REMOVE_PLAYER, ADD_NEW_PLAYER } from "../actions"

const initialState = {
    content: [],
}

const singlePlayerReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_PLAYER:
            const newPlayer = action.payload;
            const updatedPlayers = [...state.content, newPlayer].sort((a, b) => b.score - a.score);
            return {
                ...state,
                content: updatedPlayers.slice(0, 3),
            };

        case REMOVE_PLAYER:
            const newlyUpdatedPlayers = state.content.filter(player => player._id !== action.payload);
            return {
                ...state,
                content: newlyUpdatedPlayers,
            };

        default:
            return state;
    }
};

export default singlePlayerReducer