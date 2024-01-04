import { EDIT_PLAYER_INFO } from "../actions";

const initialState = {
    players: {
        content: [],
    },
};

const playerInfoReducer = (state = initialState, action) => {
    switch (action.type) {

        case EDIT_PLAYER_INFO:

            const updatedContent = state.players.content.map((currentPlayer) => {
                if (currentPlayer._id === action.payload.playerID) {
                    return {
                        ...currentPlayer,
                        name: currentPlayer.name,
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

export default playerInfoReducer;