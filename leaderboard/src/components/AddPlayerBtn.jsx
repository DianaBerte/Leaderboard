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
        'https://res.cloudinary.com/degg5zebq/image/upload/v1705134700/Game%20characters/Game_character_21_1_purnqi.png',
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
    };

    const toggleForm = () => {
      setShowForm(!showForm);
    };

    return(
        <>
        <div className='flex justify-end'>
            <button onClick={() => {
              if (showForm) {
                toggleForm();
              } else {
                toggleForm();
              }
            }}
            className='bg-third text-white rounded-full py-3 px-6 pb-3 mt-10 mb-6 uppercase text-xs cursor-pointer tracking-wider font-bold transition-all border-primary md:border-2 hover:text-third hover:text-lg hover:bg-fourth hover:shadow-xl'
            >
              {showForm ? 'Close' : 'Add Player'}
              </button>
            </div>
            
            {showForm && (
                    <div className="flex justify-start items-start">
                    <div className="bg-fourth shadow-cyan-500 text-secondary rounded-xl p-4 shadow-md">

                      <div className="mb-4">
                        <label htmlFor="playerName" className="block font-bold mb-1">Player Name:</label>
                        <input
                          type="text"
                          id="playerName"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                          placeholder="Enter Player Name"
                          className="w-full p-1 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <div className="mb-4 ">
                        <label htmlFor="playerScore" className="block font-bold mb-1">Player Score:</label>
                        <input
                        type="number"
                        id="playerScore"
                        value={playerScore}
                        onChange={(e) => setPlayerScore(e.target.value)}
                        placeholder="Player Score"
                        className="w-full p-1 border border-gray-300 rounded-lg"
                        />
                      </div>

                      <button className="w-full hover:bg-secondary bg-third text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:bg-third" onClick={handleAdd}>
                        Submit
                      </button>
                    </div>
                  </div>
           )}  
        </>
    );
};

export default AddPlayerBtn;