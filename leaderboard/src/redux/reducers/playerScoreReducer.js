import { INCREASE_PLAYER_SCORE, DECREASE_PLAYER_SCORE, RENDER_PLAYERS_ARRAY } from "../actions/index";

const initialState = {
    players: {
        content: [],
    },
};

const playerScoreReducer = (state = initialState, action) => {
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
        case INCREASE_PLAYER_SCORE:
            console.log("action.type: ", action.type);
            console.log("action.payload: ", action.payload);

            const updatedPlayers = state.players.content.map((currentPlayer) => {
                console.log('currentPlayer._id:', currentPlayer._id);
                console.log('action.payload.playerID:', action.payload.playerID);
                if (currentPlayer._id === action.payload.playerID) {
                    console.log("HELLO currentPlayer._id: ", currentPlayer._id);
                    return {
                        ...currentPlayer,
                        score:
                            action.type === DECREASE_PLAYER_SCORE
                                ? currentPlayer.score - 10
                                : currentPlayer.score + 10,
                    };
                }
                return currentPlayer;
            });

            console.log("updatedPlayers: ", updatedPlayers);

            return {
                ...state,
                players: {
                    ...state.players,
                    content: updatedPlayers,
                },
            };

        default:
            return state;
    }
};

export default playerScoreReducer;