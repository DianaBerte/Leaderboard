//handleIncrease & handleDecrease are not defined
import { useDispatch } from "react-redux";
import { removePlayer } from "../redux/actions";

const PlayerAdded = ({otherPlayers}) => {
    const dispatch = useDispatch();

    const handleRemovePlayer = async (playerId) => {
        try {
          dispatch(removePlayer(playerId));
        } catch (error) {
          console.error("handleRemovePlayer: ", error)
        }
      }; 
    
    return(
        <>
        {otherPlayers.map((player, index) => (
            <div key={player.id}>
                <div className='mb-6 py-4 px-4 text-white bg-secondary rounded overflow-hidden shadow-lg shadow-cyan-500 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <span className='text-2xl font-extrabold text-fourth rounded-full animate-pulse'>{otherPlayers.length + index + 1}</span>
                        <span className='text-2xl font-extrabold ml-4'>{player.name}</span>
                        <span className='text-xl font-bold animate-pulse text-fourth ml-4 mr-4'>{player.score}pt</span>
                        <span className='text-md font-medium uppercase'>score</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-md font-medium ml-4'>GAP: {player.gap}pt</span>
                        <button onClick={() => handleRemovePlayer(player._id)} className='ml-4'>
                            <svg className="text-align-end w-20 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
};

export default PlayerAdded;