import { RENDER_PLAYERS_ARRAY } from '../actions/index';

//see: Array of Players

export const initialState = {
    players: {
        content: [
            { id: 1, image: 'https://res.cloudinary.com/degg5zebq/image/upload/v1696758941/Game%20characters/Game_character_4_tmvlol.png', name: 'Gigi', score: 200, gap: 150 },
            { id: 2, image: 'https://res.cloudinary.com/degg5zebq/image/upload/v1696758942/Game%20characters/Game_character_2_bucm4k.png', name: 'Boo', score: 350, gap: 0 },
            { id: 3, image: 'https://res.cloudinary.com/degg5zebq/image/upload/v1696758942/Game%20characters/Game_character_1_snyslq.png', name: 'Hash', score: 100, gap: 100 },
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