//NB: reducer functions can't hold async operations (like fetching).
//Therefore, async ops go into the action creators.

import { REMOVE_PLAYER, ADD_NEW_PLAYER } from "../actions"

const initialState = {
    content: [],
}

const singlePlayerReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_PLAYER:
            return {
                ...state,
                content: [...state.content, action.payload]
            }

        case REMOVE_PLAYER:
            return {
                ...state,
                content: [state.content.filter((el, i) => i !== action.payload)]
            }
        default:
            return state
    }
}

export default singlePlayerReducer