import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { motion, useAnimation } from "framer-motion";
import MenuAndBurger from './components/MenuAndBurger.jsx';
import PlayerAdded from './components/PlayerAdded.jsx';
import AddPlayerBtn from './components/AddPlayerBtn.jsx';
import EditPlayerModal from './components/EditPlayerModal.jsx';
import StarsAnimation from './components/StarsAnimation.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, renderPlayersArray, removePlayer, editPlayerScore, editPlayerInfo } from './redux/actions/index.js';

export default function App() {

  const playersState = useSelector(state => state.players);
  const dispatch = useDispatch();

  const [players, setPlayers] = useState([]);
  const [topPlayers, setTopPlayers] = useState([]);
  const [otherPlayers, setOtherPlayers] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  // const [itShows, setItShows] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [animateIncrease, setAnimateIncrease] = useState(false);
  const [playerIdToUpdate, setPlayerIdToUpdate] = useState(null);

  const controls = useAnimation();

  // const handleClickOnCard = () => {
  //   setIsOpen(!isOpen);
  //   setItShows(!itShows);
  // };

  useEffect(() => {
    dispatch(renderPlayersArray());
  }, [dispatch]);

  const calculateScoreGap = (playerList) => {
    const sortedPlayers = [...playerList].sort((a, b) => b.score - a.score);
    const playersWithGap = sortedPlayers.map((player, index) => {
      if (index === 0) {
        return {...player, gap: null};
      };
      const gap = sortedPlayers[index - 1].score - player.score;
      return {...player, gap}
    });
    return playersWithGap;
  };

  useEffect(() => {
    if (playersState && playersState.content) {
      const initialPlayers = [...playersState.content];
      const playersWithGap = calculateScoreGap(initialPlayers);

      const sortedInitialPlayers = playersWithGap.sort((a, b) => b.score - a.score);
      const topPlayers = sortedInitialPlayers.slice(0, 3);
      const otherPlayers = sortedInitialPlayers.slice(3);

      setTopPlayers(topPlayers);
      setOtherPlayers(otherPlayers);
    }
  }, [playersState]);

    const handleAddPlayer = async (player) => {
    try {
      const playerWithImg = {
        name: player.name,
        score: player.score,
        image: player.image,
      }

      const addedPlayer = await dispatch(addPlayer(playerWithImg));
      dispatch(renderPlayersArray());
  
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers, addedPlayer];
        const sortedUpdatedPlayers = updatedPlayers.sort((a, b) => b.score - a.score);
  
        const playersWithGap = calculateScoreGap(sortedUpdatedPlayers);
  
        const topPlayers = playersWithGap.slice(0, 3);
        const otherPlayers = playersWithGap.slice(3);
  
        setTopPlayers(topPlayers);
        setOtherPlayers(otherPlayers);
  
        return playersWithGap;
      });
    } catch (error) {
      console.error("handleAddPlayer error:", error);
    }
  };

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
        // setAnimateIncrease(true);
        setPlayerIdToUpdate(playerID);
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

  useEffect(() => {
    let timeout;
    if (playerIdToUpdate) {
      // console.log("HEEEEELLOOO playerIdToUpdate: ", playerIdToUpdate);
      timeout = setTimeout(() => {
        setPlayerIdToUpdate(null);
      }, 2400); 
      return () => clearTimeout(timeout);
    }
  }, [playerIdToUpdate]);

  return (
    <div className="bg-cyan-900 min-h-screen text-primary">{/* body */}

      <div className='grid md:grid-cols-4'>{/* content wrapper */}

      <div className='md:col-span-1 md:flex md:justify-end'>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className='text-2xl font-extrabold uppercase p-4 border-b border-cyan-700'>
                <a className='hover:text-white' href="/">Leaderboard</a>
              </h1>

              <MenuAndBurger />
              
            </div>
            <ul className='mt-6 hidden md:block' id='menu'>{/* from md up: visible */}
              <li className='py-1 flex justify-end'> {/* flex justify-end: content to the right */}
                <button className='hover:text-lg hover:text-white px-4 flex justify-end transition-all'>
                  <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                </button>
              </li>
              <li className='py-1 flex justify-end'>
                <button className='hover:text-lg hover:text-white px-4 flex justify-end transition-all'>
                  <span>About</span>
                  <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                </button>
              </li>
              <li className='py-1 flex justify-end'>
                <button className='hover:text-lg hover:text-white px-4 flex justify-end transition-all'>
                  <span>Contact</span>
                  <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </button>
              </li>
            </ul>                  
            <AddPlayerBtn handleAddPlayer={handleAddPlayer} />
          </nav>
        </div>


        <div className='px-16 py-6 md:col-span-2'>{/* main content wrapper */}
          <div className='flex justify-center md:justify-end'>
            <button className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary md:border-2 hover:bg-fourth hover:text-cyan-900 transition-all'>Log in</button>
            <button className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary md:border-2 ml-2 hover:bg-fourth hover:text-cyan-900 transition-all'>Sign up</button>
          </div>

          <div>{/* header */}
            <h2 className='text-3xl font-extrabold'>Heroes</h2>
            <h3 className='text-2xl font-extrabold'>Leaderboard</h3>
          </div>

          <div>{/* cards wrapper */}
            <h4 className='flex items-center justify-center text-4xl font-extrabold mt-8'>Winners</h4>

            <div className='mt-8 pb-10 border-cyan-400 grid xl:grid-cols-3 lg:grid-cols-1 gap-20 md:gap-x-80 border-b'>

              {/* rendering the cards dynamically based on the players sorted by score */}
              {topPlayers.length > 0 ? (
                topPlayers.map((player, index) => (
                  <motion.div key={player._id} className={`bg-white rounded overflow-hidden shadow-lg shadow-cyan-500 relative lg:w-72 md:w-auto ${isOpen ? 'open-card' : ''}`}
                  // onClick={handleClickOnCard}
                  whileHover={{ scale: 1.08, cursor: 'pointer' }}
                  transition={{ duration: 0.5 }}
                  animate={controls}
                  initial="hidden"
                  >
                    {player.image && (
                      <img className='w-full h-32 sm:h-48 object-cover rounded' src={player.image} alt='character img'></img>
                        )}
                          <div className='m-4 text-secondary'>
                          <div className="flex items-center">
                            {player.name && (
                              <div className='text-2xl font-extrabold animate-pulse'>{player.name}</div>
                              )}
                              <div className='bg-fourth text-secondary font-bold rounded-full w-40 p-2 ml-auto animate-pulse'>
                                {player.score && (
                                  <div className='flex items-center justify-center'>{player.score}pt</div>
                                  )}
                                  </div>
                              </div>

                              <StarsAnimation playerID={player._id} playerIdToUpdate={playerIdToUpdate} />

                            {/* <EditPlayerModal player={playersState.content} itShows={itShows} setItShows={setItShows} /> */}
                            
                            <button onClick={() => handleScoreUpdate(player._id, 'decrease')} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/></svg></button>
                              <span className='text-sm font-medium uppercase'>score</span>
                               <button onClick={() => handleScoreUpdate(player._id, 'increase')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg></button>
                                  <div className='text-sm font-medium'>
                                    {player.gap !== undefined ? (
                                      <span>GAP: {player.gap !== null ? `${player.gap}pt` : `No one above me!`}</span>
                                    ) : (
                                      <span>No gap info</span>
                                    )}
                              </div>
                            </div>
                            <motion.div
                              key={index}
                              className='bg-third text-white text-6xl animate-bounce font-extrabold w-20 rounded-full p-3 absolute top-0 ml-3 mt-8'
                            >
                              <div className='flex items-center justify-center'>{index + 1}</div>
                            </motion.div>
                              <div className='flex justify-end'>
                                <button onClick={() => handleRemovePlayer(player._id)}>
                                  <svg className="mb-2 w-20 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" ><path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" /></svg>
                                </button>
                              </div>
                          </motion.div>
                        ))
              ) : (
                <h3>Loading players...</h3>
              )}
            </div>
            <PlayerAdded
              otherPlayers={otherPlayers}
            />
          </div>{/* cards wrapper */}
        </div>{/* main content wrapper */}
      </div>
    </div>
)}