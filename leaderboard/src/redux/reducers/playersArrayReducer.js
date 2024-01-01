import { RENDER_PLAYERS_ARRAY } from '../actions/index';

export const initialState = {
    players: {
        content: [],
    },
};

const playersArrayReducer = (state = initialState, action) => {
    switch (action.type) {

        case RENDER_PLAYERS_ARRAY:
            return {
                ...state,
                content: action.payload,
            };

        default:
            return state;
    }
};

export default playersArrayReducer