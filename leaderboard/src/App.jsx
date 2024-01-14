import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Lottie from 'lottie-react';
import { motion, useAnimation } from "framer-motion";
import MenuAndBurger from './components/MenuAndBurger.jsx';
import PlayerAdded from './components/PlayerAdded.jsx';
import AddPlayerBtn from './components/AddPlayerBtn.jsx';
import parrot from './parrot.json';
import StarsAnimation from './components/StarsAnimation.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, renderPlayersArray, removePlayer, editPlayerScore } from './redux/actions/index.js';

export default function App() {

  const playersState = useSelector(state => state.players);
  const dispatch = useDispatch();

  const [setPlayers] = useState([]);
  const [topPlayers, setTopPlayers] = useState([]);
  const [otherPlayers, setOtherPlayers] = useState([]);
  const [playerIdToUpdate, setPlayerIdToUpdate] = useState(null);
  const [showParrot, setShowParrot] = useState(false);

  const controls = useAnimation();

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
        setPlayerIdToUpdate(playerID);

        const milestones = [300, 400, 500, 600, 700, 800, 900, 1000];
        milestones.forEach(milestone => {
          if (updatedScore >= milestone && currentPlayer.score < milestone ) {
            setShowParrot(true);
            setTimeout(() => {
              setShowParrot(false);
            }, 2000);
          }
        });

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
      timeout = setTimeout(() => {
        setPlayerIdToUpdate(null);
      }, 1200); 
      return () => clearTimeout(timeout);
    }
  }, [playerIdToUpdate]);

  const arrayOfLinks = [
    {text: "Home",  href:"#", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"},
    {text: "About", href:'https://dianaberte.com/', icon: 'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'},
    {text: "Contact", href: 'mailto:dianaberte.go@gmail.com', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'},
  ];

  return (
    <>
    {showParrot && (
      <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-black bg-opacity-75">
        <div style={{ width: "50%" }}>
          <Lottie animationData={parrot} />
        </div>
      </div>
    )}

    <section className='grid gap-8'>
      
    <div className="bg-cyan-900 min-h-screen w-full h-full text-primary">{/* body */}

      <div className='flex flex-col md:flex-row'>{/* content wrapper */}
      <div className='md:flex md:justify-start'>
          <nav className='text-right px-2'>
            <div className='flex justify-between items-center px-0 md:px-2'>
              <h1 className='text-2xl font-extrabold uppercase p-4 border-b border-cyan-700'>
                <a className='hover:text-white' href="/">Leaderboard</a>
              </h1>
              <MenuAndBurger /> 
            </div>

            <ul className='mt-6 hidden md:block' id='menu'>
              {arrayOfLinks.map((link, index) => (
                <li key={index} className={`py-1 flex justify-end ${link.text === 'About' ? 'about-link' : ''} `}>
                  {(
                    <a href={link.href} className='hover:scale-110 hover:text-white px-4 flex justify-end transition-all' >
                      <span>{link.text}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                      </svg>
                    </a>
                  )}
                </li>
              ))}
              </ul>
            <AddPlayerBtn handleAddPlayer={handleAddPlayer} className='justify-end' />
          </nav>
        </div>

        <div className='p-2 md:p-6 grow'>{/* main content wrapper */}
        
          <div className='md:flex justify-center hidden md:justify-end'>
            <button className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary md:border-2 hover:bg-fourth hover:text-cyan-900 transition-all'>Log in</button>
            <button className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary md:border-2 ml-2 hover:bg-fourth hover:text-cyan-900 transition-all'>Sign up</button>
          </div>

          <div>{/* header */}</div>

          <div>{/* cards wrapper */}
            <h4 className='flex items-center justify-center text-4xl font-extrabold mt-2 md:mt-8'>Winners</h4>

            <div className='mt-8 pb-10 border-cyan-400 grid grid-cols-1 md:grid-cols-3 gap-4'>

              {/* rendering the cards dynamically based on the players sorted by score */}
              {topPlayers.length > 0 ? (
                topPlayers.map((player, index) => (
                  <motion.div key={player._id} className={`flex flex-col bg-white rounded overflow-hidden shadow-lg shadow-cyan-500 relative w-64 md:w-40 lg:w-56 xl:w-64 mx-auto mb-8`}
                  whileHover={{ scale: 1.15, cursor: 'pointer' }}
                  transition={{ duration: 0.5 }}
                  animate={controls}
                  initial="hidden"
                  >
                    {player.image && (
                      <img className='w-full h-48 object-cover rounded' src={player.image} alt='character img'></img>
                        )}
                          <div className='m-4 mb-0 text-secondary flex-grow'>
                          <div className='flex items-center justify-between flex-wrap'>
                            {player.name && (
                              <div className='text-lg font-extrabold animate-pulse'>{player.name}</div>
                              )}
                              <div className='bg-fourth text-secondary font-bold rounded-full py-2 px-4 animate-pulse'>
                                {player.score && (
                                  <div className='flex items-center justify-center'>{player.score}pt</div>
                                  )}
                                  </div>
                              </div>

                              <StarsAnimation playerID={player._id} playerIdToUpdate={playerIdToUpdate} />
                            
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
                              className='bg-third text-white text-4xl animate-bounce font-extrabold w-16 rounded-full p-3 absolute top-0 ml-3 mt-8'
                            >
                              <div className='flex items-center justify-center'>{index + 1}</div>
                            </motion.div>
                              <div className='flex justify-end'>
                                <button onClick={() => handleRemovePlayer(player._id)}>
                                  <svg className="mb-0 w-12 h-12 transform transition-transform hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" ><path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" /></svg>
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
    </section>
    </>
)}