import { INCREASE_PLAYER_SCORE, DECREASE_PLAYER_SCORE } from "../actions/index";

const initialState = {
    players: {
        content: [],
    },
};

const playerScoreReducer = (state = initialState, action) => {
    switch (action.type) {

        case DECREASE_PLAYER_SCORE:
        case INCREASE_PLAYER_SCORE:
            return {
                ...state,
                players: {
                    ...state.players,
                    content: state.players.content.map((currentPlayer) =>
                        currentPlayer._id === action.payload
                            ? {
                                ...currentPlayer,
                                score:
                                    action.type === DECREASE_PLAYER_SCORE
                                        ? currentPlayer.score - 10
                                        : currentPlayer.score + 10,
                            }
                            : currentPlayer
                    ),
                },
            };

        default:
            return state;
    }
};

export default playerScoreReducer