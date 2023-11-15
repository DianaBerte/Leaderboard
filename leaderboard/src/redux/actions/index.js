export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'
export const RENDER_PLAYERS_ARRAY = 'RENDER_PLAYERS_ARRAY'

export const addPLayerAsync = (player) => {
    return async (dispatch, getState) => {
        dispatch({
            type: ADD_NEW_PLAYER,
            payload: player,
        })
    }
}

export const removePlayer = (i) => {
    return {
        type: REMOVE_PLAYER,
        payload: i,
    }
}

export const renderPlayersArray = (players) => {
    return {
        type: RENDER_PLAYERS_ARRAY,
        payload: players
    };
}