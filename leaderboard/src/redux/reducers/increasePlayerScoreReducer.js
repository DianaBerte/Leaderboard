import { INCREASE_PLAYER_SCORE } from "../actions/index";

const initialState = {
    players: {
        content: [],
    },
};

const increasePlayerScoreReducer = (state = initialState, action) => {
    switch (action.type) {

        case INCREASE_PLAYER_SCORE:
            return {
                ...state,
                content: state.players.content.map((currentPlayer) => {
                    if (currentPlayer._id === action.payload) {
                        return { ...currentPlayer, score: currentPlayer.score + 10 };
                    }
                    return currentPlayer;
                }),
            };

        default:
            return state;
    }
};

export default increasePlayerScoreReducer