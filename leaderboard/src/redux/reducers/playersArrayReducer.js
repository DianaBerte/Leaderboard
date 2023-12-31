import { RENDER_PLAYERS_ARRAY, INCREASE_PLAYER_SCORE, DECREASE_PLAYER_SCORE } from '../actions/index';

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

        case INCREASE_PLAYER_SCORE:
            return {
                ...state,
                content: state.content.map((currentPlayer) => {
                    if (currentPlayer._id === action.payload) {
                        return { ...currentPlayer, score: currentPlayer.score + 10 };
                    }
                    return currentPlayer;
                }),
            };

        case DECREASE_PLAYER_SCORE:
            return {
                ...state,
                content: state.content.map((player) => {
                    if (player.id === action.payload) {
                        return { ...player, score: player.score - 10 };
                    }
                    return player;
                })
            };

        default:
            return state
    }
}

export default playersArrayReducer