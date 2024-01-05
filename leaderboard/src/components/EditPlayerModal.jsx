// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editPlayerInfo, removePlayer, renderPlayersArray } from "../redux/actions";

// const EditPlayerModal = ({player}) => {

//   const dispatch = useDispatch();
//   const playersState = useSelector(state => state.players);
//   console.log("HI", playersState)

//   const [showForm, setShowForm] = useState(false);
//   const [playerName, setPlayerName] = useState(player.name || '');

//   // const handleEdit = async () => {
//   //   try {
//   //     const updatedData = {name: playerName};
//   //     await dispatch(editPlayerInfo(player._id, updatedData));
//   //     console.log("player_id: ", player._id)
//   //     dispatch(renderPlayersArray());
//   //     setShowForm(false);
//   //   } catch (error) {
//   //     console.error("handleEdit: ", error)
//   //   }    
//   // };

//   const handleRemovePlayer = async (playerID) => {
//     try {
//       const currentPlayer = playersState.content.find(player => player._id === playerID);
//       console.log("HELLO" , currentPlayer)
//       dispatch(removePlayer(currentPlayer._id));
//     } catch (error) {
//       console.error("handleRemovePlayer: ", error)
//     }
//   };

//   return(
//       <>
//       <div className='flex'>
//           <button onClick={() => setShowForm(true)}
//           className='bg-third text-white rounded-full py-3 px-6 pb-3 mt-10 mb-6 uppercase text-xs cursor-pointer tracking-wider font-bold border-primary md:border-2 hover:text-third hover:text-sm hover:bg-fourth hover:shadow-xl'
//           >Edit Player</button>
//           </div>
          
//           {showForm && (
//               <div className="form-container">
//                   <label>
//                       Player Name:
//                       <input
//                       type="text"
//                       value={playerName}
//                       onChange={(e) => setPlayerName(e.target.value)}
//                       placeholder="New Name"
//                       ></input>
//                   </label>
//                   <button onClick={() => handleRemovePlayer(player._id)}>Delete Player</button>
//                   {/* <button onClick={handleEdit}>Submit</button> */}
//               </div>
//          )}  
//       </>
//   );
// };

// export default EditPlayerModal;