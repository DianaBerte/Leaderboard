import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import MenuAndBurger from './components/MenuAndBurger.jsx';
import PlayerAdded from './components/PlayerAdded.jsx';
import AddPlayerBtn from './components/AddPlayerBtn.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_NEW_PLAYER } from './redux/actions/index.js';

export default function App() {

  const playersState = useSelector(state => state.players);

  const [players, setPlayers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (playersState && playersState.players.content) {
      const initialPlayers = [...playersState.players.content];
      setPlayers(initialPlayers)
    }
  }, [playersState]);

  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  const handleAddPlayer = (player) => {
    dispatch({
      type: ADD_NEW_PLAYER,
      payload: player,
    });

    // ? is optional chaining operator (prevents throwing an error)
    // const handleAddPlayer = (player) => {
    //   const index = sortedPlayers.findIndex((p) => player.score > p.score);
    //   const newSortedPlayers =
    //     index !== -1 ? [...sortedPlayers.slice(0, index), player, ...sortedPlayers.slice(index)] : [...sortedPlayers, player];
    //   setPlayers(newSortedPlayers);
    // };
    

  };

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
                <button className='hover:text-lg hover:text-white px-4 flex justify-end'>
                  <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                </button>
              </li>
              <li className='py-1 flex justify-end'>
                <button className='hover:text-lg hover:text-white px-4 flex justify-end'>
                  <span>About</span>
                  <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                </button>
              </li>
              <li className='py-1 flex justify-end'>
                <button className='hover:text-lg hover:text-white px-4 flex justify-end'>
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
            <button className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary md:border-2 hover:bg-fourth hover:text-cyan-900'>Log in</button>
            <button className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary md:border-2 ml-2 hover:bg-fourth hover:text-cyan-900'>Sign up</button>
          </div>

          <div>{/* header */}
            <h2 className='text-3xl font-extrabold'>Heroes</h2>
            <h3 className='text-2xl font-extrabold'>Leaderboard</h3>
          </div>

          <div>{/* cards wrapper */}
            <h4 className='flex items-center justify-center text-4xl font-extrabold mt-8'>Winners</h4>

            <div className='mt-8 pb-10 border-cyan-400 grid xl:grid-cols-3 lg:grid-cols-1 gap-20 md:gap-x-80 border-b'>

              {/* rendering the cards dinamically based on the players sorted by score */}
              {sortedPlayers.length > 0 ? (
                              sortedPlayers.map((player, index) => (
                                <div key={player.id} className="bg-white rounded overflow-hidden shadow-lg shadow-cyan-500 relative lg:w-72 md:w-auto">
                                  {player.image && (
                                    <img className='w-full h-32 sm:h-48 object-cover rounded' src={player.image} alt='character img'></img>
                                  )}
                                  <div className='m-4 text-secondary'>
                                  <div className="flex items-center">
                                    {player.name && (
                                      <div className='text-2xl font-extrabold animate-bounce'>{player.name}</div>
                                    )}
                                    <div className='bg-fourth text-secondary font-bold rounded-full w-40 p-2 ml-auto animate-pulse'>
                                      {player.score && (
                                        <div className='flex items-center justify-center'>{player.score}pt</div>
                                      )}
                                    </div>
                                  </div>
                                  <div className='flex'>{/* stars */}
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" className="w-6 h-6"><path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" /></svg>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24">
                                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24">
                                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24">
                                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/></svg></button>
                                      <span className='text-sm font-medium uppercase'>score</span>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={5.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg></button>
                                    <div className='text-sm font-medium uppercase'>Gap: ...</div>
                                  </div>
                                  <div className='bg-third text-white text-6xl font-extrabold w-20 rounded-full p-3 absolute top-0 ml-3 mt-8 animate-bounce'>
                                    <div className='flex items-center justify-center'>{index + 1}</div>
                                  </div>
                                </div>
                                ))
              ) : (
                <p>No players available</p>
              )
            }

            </div>

              <PlayerAdded
              sortedPlayers={sortedPlayers}
              // setPlayers={setPlayers}
              />

          </div>{/* cards wrapper */}

        </div>{/* main content wrapper */}
        
      </div>
    </div>
    
  )
}
