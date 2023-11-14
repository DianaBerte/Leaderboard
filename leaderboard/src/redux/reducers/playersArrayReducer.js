import { RENDER_PLAYERS_ARRAY } from '../actions/index';

//see: Array of Players

const initialState = {
    players: {
        content: [
            { id: 1, name: 'Gigi', score: 200 },
            { id: 2, name: 'Boo', score: 150 },
            { id: 3, name: 'Hash', score: 100 },
        ],
    },
};

const playersArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case RENDER_PLAYERS_ARRAY:
            return {
                ...state,
                players: {
                    ...state.players,
                    content: [...state.players.content, action.payload]
                }
            };
        default:
            return state
    }
}

export default playersArrayReducer