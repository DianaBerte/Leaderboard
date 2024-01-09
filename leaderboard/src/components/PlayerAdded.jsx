import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removePlayer, editPlayerScore, renderPlayersArray } from "../redux/actions";

const PlayerAdded = ({otherPlayers}) => {
    const dispatch = useDispatch();
    const playersState = useSelector(state => state.players);

const handleRemovePlayer = async (playerId) => {
    try {
        dispatch(removePlayer(playerId));
    } catch (error) {
        console.error("handleRemovePlayer: ", error)
    }
};

const handleScoreUpdate = async (playerID, actionType) => {
    try {
        const currentPlayer = playersState.content.find(player => player._id === playerID);
        if (!currentPlayer) {
        throw new Error("Player not found");
        }  
      
        let updatedScore;
        if (actionType === 'increase') {
            updatedScore = currentPlayer.score + 10;
          } else if (actionType === 'decrease') {
            updatedScore = currentPlayer.score - 10;
          } else {
            throw new Error("Invalid action type");
          }
      
        const updatedData = { score: updatedScore };
      
        await dispatch(editPlayerScore(playerID, updatedData));
        dispatch(renderPlayersArray());
    } catch (error) {
        console.error("handleScoreUpdate: ", error)
    }
};
    
    return(
        <>
        {otherPlayers.map((player, index) => (
            <motion.div key={player._id}
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '600px'}}
                  >
                <div className='mb-6 py-4 px-4 text-white bg-secondary rounded overflow-hidden shadow-lg shadow-cyan-500 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <span className='text-2xl font-extrabold text-fourth rounded-full animate-pulse'>{index + 4}</span>
                        <span className='text-2xl font-extrabold ml-4'>{player.name}</span>
                        <span className='text-xl font-bold animate-pulse text-fourth ml-4 mr-4'>{player.score}pt</span>
                        <button onClick={() => handleScoreUpdate(player._id, 'decrease')} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/></svg></button>
                        <span className='text-md font-medium uppercase'>score</span>
                        <button onClick={() => handleScoreUpdate(player._id, 'increase')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg></button>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-md font-medium ml-4'>GAP: {player.gap}pt</span>
                        <button onClick={() => handleRemovePlayer(player._id)} className='ml-4 transform transition-transform hover:scale-110'>
                            <svg className="text-align-end w-20 h-8 transform transition-transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        ))}
        </>
    )
};

export default PlayerAdded;