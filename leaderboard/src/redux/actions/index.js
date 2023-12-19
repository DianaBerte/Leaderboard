export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'
export const RENDER_PLAYERS_ARRAY = 'RENDER_PLAYERS_ARRAY'
export const ADD_PLAYER_TO_ADDED_LIST = 'ADD_PLAYER_TO_ADDED_LIST'
export const INCREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE'
export const DECREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE'

export const addPLayerAsync = (player) => {
    return async (dispatch, getState) => {
        dispatch({
            type: ADD_NEW_PLAYER,
            payload: player,
        })
    }
}

export const addPlayerToAddedList = (player) => {
    return {
        type: ADD_PLAYER_TO_ADDED_LIST,
        payload: player,
    };
}

export const removePlayer = (i) => {
    return {
        type: REMOVE_PLAYER,
        payload: i,
    }
}

export const renderPlayersArray = (player) => {
    return {
        type: RENDER_PLAYERS_ARRAY,
        payload: player
    };
}

export const increasePlayerScore = (playerID) => {
    console.log("playerID", playerID);
    return {
        type: INCREASE_PLAYER_SCORE,
        payload: playerID,
    }
}

export const decreasePlayerScore = (playerID) => {
    console.log("playerID", playerID);
    return {
        type: DECREASE_PLAYER_SCORE,
        payload: playerID,
    }
}