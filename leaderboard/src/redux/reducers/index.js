const initialState = {
    player: {
        isVisible: false,
    }
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_PLAYER_VISIBLE':
            return {
                ...state,
                player: {
                    ...state.player,
                    content: 
                }
            }
        default:
            return state
    }
}

export default mainReducer