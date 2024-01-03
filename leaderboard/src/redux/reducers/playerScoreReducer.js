import { INCREASE_PLAYER_SCORE, DECREASE_PLAYER_SCORE, RENDER_PLAYERS_ARRAY } from "../actions/index";

const initialState = {
    players: {
        content: [],
    },
};

// const playerScoreReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case RENDER_PLAYERS_ARRAY:
//             return {
//                 ...state,
//                 players: {
//                     ...state.players,
//                     content: action.payload,
//                 },
//             };

//         case DECREASE_PLAYER_SCORE:
//         case INCREASE_PLAYER_SCORE:

//             const updatedPlayers = state.players.content.map((currentPlayer) => {
//                 if (currentPlayer._id === action.payload.playerID) {
//                     return {
//                         ...currentPlayer,
//                         score:
//                             action.type === DECREASE_PLAYER_SCORE
//                                 ? currentPlayer.score - 10
//                                 : currentPlayer.score + 10,
//                     };
//                 }
//                 return currentPlayer;
//             });

//             const topPlayers = updatedPlayers.slice(0, 3);
//             const otherPlayers = updatedPlayers.slice(3);

//             console.log("updatedPlayers in reducer: ", updatedPlayers);

//             return {
//                 ...state,
//                 players: {
//                     ...state.players,
//                     content: updatedPlayers,
//                 },
//                 topPlayers,
//                 otherPlayers,
//             };

//         default:
//             return state;
//     }
// };

// export default playerScoreReducer;

const playerScoreReducer = (state = initialState, action) => {
    switch (action.type) {

        case INCREASE_PLAYER_SCORE:
        case DECREASE_PLAYER_SCORE:

            const updatedContent = state.players.content.map((currentPlayer) => {
                if (currentPlayer._id === action.payload.playerID) {
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

            return {
                ...state,
                players: {
                    ...state.players,
                    content: updatedContent,
                },
            };

        default:
            return state;
    }
};

export default playerScoreReducer;