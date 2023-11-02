import { useDispatch } from "react-redux";

//https://epicodeschool.webex.com/recordingservice/sites/epicodeschool/recording/44431ca88a7e103bbfdf005056818724/playback
// 03:18

const AddPlayerBtn = (player) => {

    const dispatch = useDispatch()

    return(
        <>
        <div className='flex'>
            <button onClick={() => {
                dispatch({
                    type: 'SET_PLAYER_VISIBLE',
                    payload: player
                })
            }} className='bg-third text-white rounded-full py-3 px-6 pb-3 mt-10 mb-6 uppercase text-xs cursor-pointer tracking-wider font-bold border-primary md:border-2 animate-bounce hover:text-third hover:text-sm hover:bg-fourth hover:shadow-xl'>Add Player</button>
        </div>
        </>
    );
};

export default AddPlayerBtn;