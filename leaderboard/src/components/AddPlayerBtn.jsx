import { useDispatch } from "react-redux";
import { ADD_NEW_PLAYER } from "../redux/actions";
import { useState } from "react";

// D9 - Redux Intro (remove from cart)
// D11 - Multiple reducers & Async operations 3:06:00 (finished watching)
//code: https://github.com/irvelervel/FS0522-epizon-d2

const AddPlayerBtn = () => {
    //the state my components are receiving is the whole state, not only one part of it.
    //So, I can travel through it by state.player.content, etc.

    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const [playerScore, setPlayerScore] = useState('');

    const handleAddPlayer = () => {
        dispatch({
            type: ADD_NEW_PLAYER,
            payload: {name: playerName, score: playerScore}
        });
        setShowForm(false);
        setPlayerName('');
        setPlayerScore('');
    }

    return(
        <>
        <div className='flex'>
            <button onClick={() => setShowForm(true)}
            className='bg-third text-white rounded-full py-3 px-6 pb-3 mt-10 mb-6 uppercase text-xs cursor-pointer tracking-wider font-bold border-primary md:border-2 animate-bounce hover:text-third hover:text-sm hover:bg-fourth hover:shadow-xl'
            >Add Player</button>
            </div>
            
            {showForm && (
                <div className="form-container">
                    <label>
                        Player Name:
                        <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        ></input>
                    </label>
                    <label>
                        Player Score:
                        <input
                        type="text"
                        value={playerScore}
                        onChange={(e) => setPlayerScore(e.target.value)}
                        ></input>
                    </label>
                    <button onClick={handleAddPlayer}>Submit</button>
                </div>
           )}  
        </>
    );
};

export default AddPlayerBtn;