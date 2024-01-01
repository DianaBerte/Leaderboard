import { INCREASE_PLAYER_SCORE, DECREASE_PLAYER_SCORE } from "../actions/index";

const initialState = {
    content: [],
}

const playerScoreReducer = (state = initialState, action) => {
    switch (action.type) {

        case DECREASE_PLAYER_SCORE:
            console.log("entering DECREASE_PLAYER_SCORE")
            return {
                ...state,
                content: state.content.map((player) => {
                    if (player.id === action.payload) {
                        return { ...player, score: player.score - 10 };
                    }
                    return player;
                })
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

        default:
            return state;
    }
};

export default playerScoreReducer