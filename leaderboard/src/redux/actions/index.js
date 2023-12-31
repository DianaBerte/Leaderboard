export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const RENDER_PLAYERS_ARRAY = 'RENDER_PLAYERS_ARRAY';
export const ADD_PLAYER_TO_ADDED_LIST = 'ADD_PLAYER_TO_ADDED_LIST';
export const INCREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE';
export const DECREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE';

export const url = "https://diana-be-3cf48a52853d.herokuapp.com/users";
export const auth = process.env.REACT_APP_AUTH;

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

export const removePlayer = (playerId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${url}/${playerId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: auth,
                },
            });
            if (!response.ok) {
                throw new Error("Failed to delete player");
            }
            dispatch({
                type: REMOVE_PLAYER,
                payload: playerId,
            });
            dispatch(renderPlayersArray());
        } catch (error) {
            console.error("Error in removePlayer: ", error)
        }
    };
};

export const increasePlayerScore = (playerID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: auth,
                },
            });
            if (response.ok) {
                dispatch({
                    type: INCREASE_PLAYER_SCORE,
                    payload: playerID,
                });
            } else {
                console.log("increasePlayerScore Error");
            }
        } catch (error) {
            console.error("increasePlayerScore: ", error);
        };
    }
};

export const decreasePlayerScore = (playerID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: auth,
                },
            });
            if (response.ok) {
                dispatch({
                    type: DECREASE_PLAYER_SCORE,
                    payload: playerID,
                });
            } else {
                console.log("decreasePlayerScore Error");
            }
        } catch (error) {
            console.error("decreasePlayerScore: ", error);
        };
    }
}