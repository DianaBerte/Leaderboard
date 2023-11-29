import { useState } from "react";

const AddPlayerBtn = ({handleAddPlayer}) => {

    const [showForm, setShowForm] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const [playerScore, setPlayerScore] = useState('');

    const handleAdd = () => {
        handleAddPlayer({ name: playerName, score: Number(playerScore)})
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
                        placeholder="Player Name"
                        ></input>
                    </label>
                    <label>
                        Player Score:
                        <input
                        type="number"
                        value={playerScore}
                        onChange={(e) => setPlayerScore(e.target.value)}
                        placeholder="Player Score"
                        ></input>
                    </label>
                    <button onClick={handleAdd}>Submit</button>
                </div>
           )}  
        </>
    );
};

export default AddPlayerBtn;