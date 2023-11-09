export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'

export const removePlayerAction = (i) => {
    return {
        type: REMOVE_PLAYER,
        payload: i,
    }
}

export const addPLayerAsync = (player) => {
    return async (dispatch, getState) => {

    }
}