import { RENDER_PLAYERS_ARRAY, INCREASE_PLAYER_SCORE } from '../actions/index';

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

        case INCREASE_PLAYER_SCORE:
            console.log("HELLO, THIS IS REDUCER conten before mapping: ", state.content)
            return {
                ...state,
                content: state.players.content.map((player) => {
                    console.log("REDUCER player: ", player)
                    if (player.id === action.payload) {
                        return { ...player, score: player.score + 10 };
                    }
                    return player;
                }),
            };

        default:
            return state
    }
}

export default playersArrayReducer