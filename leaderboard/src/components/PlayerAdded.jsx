import { useSelector } from "react-redux";

const PlayerAdded = () => {
    //travel through state: state.player.content etc.
    const players = useSelector(state => state.singlePlayer.content);

    return(
        <>
        {players.map((player, index) => (
                    <div key={index}>{/* CARD */}
                    <div className='mb-6 py-4 px-4 text-white bg-secondary rounded overflow-hidden shadow-lg shadow-cyan-500'>
                        <span className='text-2xl font-extrabold text-fourth rounded-full animate-pulse'>5</span>
                        <span className='text-2xl font-extrabold ml-4'>{player.name}</span>
                        <span className='text-xl font-bold animate-pulse text-fourth ml-4 mr-4'>{player.score}pt</span>
                        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/></svg></button>
                        <span className='text-md font-medium uppercase'>score</span>
                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg></button>
                        <span className='text-md font-medium uppercase ml-4'>Gap: ...</span>
                    </div>
                </div>
        ))}
        </>
    )
};

export default PlayerAdded;