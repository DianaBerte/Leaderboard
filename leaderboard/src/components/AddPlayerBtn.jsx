import { useDispatch } from "react-redux";

// D9 - Redux Intro (remove from cart)
// D11 - Multiple reducers & Async operations 1:00:00
// chatgpt: generar nuevo jugador

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