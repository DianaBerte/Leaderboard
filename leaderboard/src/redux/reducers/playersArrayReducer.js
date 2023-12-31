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
                players: {
                    ...state.players,
                    content: action.payload,
                },
            };

        case DECREASE_PLAYER_SCORE:
            return {
                ...state,
                players: {
                    ...state.players,
                    content: state.players.content.map((currentPlayer) =>
                        currentPlayer._id === action.payload
                            ? { ...currentPlayer, score: currentPlayer.score - 10 }
                            : currentPlayer
                    ),
                },
            };

        case INCREASE_PLAYER_SCORE:
            return {
                ...state,
                players: {
                    ...state.players,
                    content: state.players.content.map((currentPlayer) =>
                        currentPlayer._id === action.payload
                            ? { ...currentPlayer, score: currentPlayer.score + 10 }
                            : currentPlayer
                    ),
                },
            };

        default:
            return state;
    }
};

export default playersArrayReducer