import { DECREASE_PLAYER_SCORE } from "../actions/index";

const initialState = {
    players: {
        content: [],
    },
};

const decreasePlayerScoreReducer = (state = initialState, action) => {
    switch (action.type) {

        case DECREASE_PLAYER_SCORE:
            return {
                ...state,
                content: state.players.content.map((currentPlayer) => {
                    if (currentPlayer._id === action.payload) {
                        return { ...currentPlayer, score: currentPlayer.score - 10 };
                    }
                    return currentPlayer;
                }),
            };

        default:
            return state;
    }
};

export default decreasePlayerScoreReducer