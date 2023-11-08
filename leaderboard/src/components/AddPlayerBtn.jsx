import { useDispatch } from "react-redux";
import { ADD_NEW_PLAYER } from "../redux/actions";

// D9 - Redux Intro (remove from cart)
// D11 - Multiple reducers & Async operations 2:06:00
// chatgpt: generar nuevo jugador

const AddPlayerBtn = (player) => {
    //the state my components are receiving is the whole state, not only one part of it.
    //So, I can travel through it by state.player.content, etc.

    const dispatch = useDispatch()

    return(
        <>
        <div className='flex'>
            <button onClick={() => {
                dispatch({
                    type: ADD_NEW_PLAYER,
                    payload: player
                })
            }} className='bg-third text-white rounded-full py-3 px-6 pb-3 mt-10 mb-6 uppercase text-xs cursor-pointer tracking-wider font-bold border-primary md:border-2 animate-bounce hover:text-third hover:text-sm hover:bg-fourth hover:shadow-xl'>Add Player</button>
        </div>
        </>
    );
};

export default AddPlayerBtn;