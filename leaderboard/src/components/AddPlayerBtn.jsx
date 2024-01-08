import { useState } from "react";

const AddPlayerBtn = ({handleAddPlayer}) => {

    const [showForm, setShowForm] = useState(false);
    const [playerName, setPlayerName] = useState('');
    const [playerScore, setPlayerScore] = useState('');

    const imageUrls = [
        'https://res.cloudinary.com/degg5zebq/image/upload/v1696758943/Game%20characters/Game_character_5_ic6mq6.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1696758941/Game%20characters/Game_character_3_k9imdp.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362644/Game%20characters/Game_character_14_xccf14.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362644/Game%20characters/Game_character_16_y7eytr.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362644/Game%20characters/Game_character_19_yvbvwf.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362644/Game%20characters/Game_character_18_vfnfwy.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362644/Game%20characters/Game_character_15_u3zwcn.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362645/Game%20characters/Game_character_17_hvn3fy.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362645/Game%20characters/Game_character_11_huyyuf.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362645/Game%20characters/Game_character_13_pinodr.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362645/Game%20characters/Game_character_12_oosl0t.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362645/Game%20characters/Game_character_10_dde3b8.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362645/Game%20characters/Game_character_9_rtgeio.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362646/Game%20characters/Game_character_8_xchyer.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362646/Game%20characters/Game_character_7_k5iy7p.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704454579/Game%20characters/Game_character_21_meusej.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362647/Game%20characters/Game_character_6_jof8b7.png',
        'https://res.cloudinary.com/degg5zebq/image/upload/v1704362647/Game%20characters/Game_character_6_jof8b7.png',
];

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    };

    const handleAdd = () => {
        if(playerName !== '' && !isNaN(playerScore) && playerScore !== '') {
        const randomImageUrl = getRandomImage();
        const newPlayer = { name: playerName, score: Number(playerScore), image: randomImageUrl};
        handleAddPlayer(newPlayer);
        setShowForm(false);
        setPlayerName('');
        setPlayerScore('');
        } else {
            alert("Please enter a valid player name and score.")
        }
    }

    return(
        <>
        <div className='flex'>
            <button onClick={() => setShowForm(true)}
            className='bg-third text-white rounded-full py-3 px-6 pb-3 mt-10 mb-6 uppercase text-xs cursor-pointer tracking-wider font-bold transition-all border-primary md:border-2 animate-pulse hover:text-third hover:text-sm hover:bg-fourth hover:shadow-xl'
            >Add Player</button>
            </div>
            
            {showForm && (
                    <div className="flex justify-center items-center">
                    <div className="bg-fourth shadow-cyan-500 text-secondary animate-pulse rounded-lg p-8 shadow-md">
                      <div className="mb-4">
                        <label htmlFor="playerName" className="block font-bold mb-1">Player Name:</label>
                        <input
                          type="text"
                          id="playerName"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                          placeholder="Enter Player Name"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-4">
                      <label>
                        Player Score:
                        <input
                        type="number"
                        value={playerScore}
                        onChange={(e) => setPlayerScore(e.target.value)}
                        placeholder="Player Score"
                        ></input>
                    </label>
                      </div>
                      <button className="w-full hover:bg-secondary bg-third text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600" onClick={handleAdd}>
                        Submit
                      </button>
                    </div>
                  </div>
           )}  
        </>
    );
};

export default AddPlayerBtn;