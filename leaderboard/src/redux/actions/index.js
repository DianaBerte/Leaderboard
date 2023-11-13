export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'
//must add actions for playerS

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