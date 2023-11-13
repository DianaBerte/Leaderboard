//import {SOMETHING} from actions

//see: Array of Players

const initialState = {
    players: {
        content: [
            { id: 1, name: 'Gigi', score: 200 },
            { id: 2, name: 'Boo', score: 150 },
            { id: 3, name: 'Hash', score: 100 },
        ],
    },
};

const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default playersReducer