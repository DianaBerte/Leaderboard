export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const RENDER_PLAYERS_ARRAY = 'RENDER_PLAYERS_ARRAY';
export const ADD_PLAYER_TO_ADDED_LIST = 'ADD_PLAYER_TO_ADDED_LIST';
export const INCREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE';
export const DECREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE';

export const url = "https://diana-be-3cf48a52853d.herokuapp.com/users";
export const auth = process.env.REACT_APP_AUTH;

export const addPlayer = (player) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: auth,
                },
                body: JSON.stringify(player),
            });
            if (!response.ok) {
                throw new Error("addPlayer() error");
            };
            const addedPlayer = await response.json();
            dispatch({
                type: ADD_NEW_PLAYER,
                payload: addedPlayer,
            });
            return addedPlayer;
        } catch (error) {
            console.error("addPlayer() error:", error);
            throw error;
        }
    };
};

export const removePlayer = (i) => {
    return {
        type: REMOVE_PLAYER,
        payload: i,
    }
}

export const renderPlayersArray = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: auth,
                },
            });
            if (response.ok) {
                const data = await response.json();
                dispatch({
                    type: RENDER_PLAYERS_ARRAY,
                    payload: data,
                });
            } else {
                console.log("renderPlayersArray Error");
            }
        } catch (error) {
            console.log("renderPlayersArray Error");
        };
    };
};

export const increasePlayerScore = (playerID) => {
    console.log("increasePlayerScore playerID", playerID);
    return {
        type: INCREASE_PLAYER_SCORE,
        payload: playerID,
    }
}

export const decreasePlayerScore = (playerID) => {
    console.log("decreasePlayerScore playerID", playerID);
    return {
        type: DECREASE_PLAYER_SCORE,
        payload: playerID,
    }
}