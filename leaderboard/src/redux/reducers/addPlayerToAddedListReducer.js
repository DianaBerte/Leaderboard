import { ADD_PLAYER_TO_ADDED_LIST } from "../actions";

const initialState = {
    addedPlayers: [],
}

const addPlayerToAddedListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER_TO_ADDED_LIST:
            return {
                ...state,
                addedPlayers: [...state.addedPlayers, action.payload]
            }
        default:
            return state;
    }
}

export default addPlayerToAddedListReducer