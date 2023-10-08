import React from 'react';
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <div className="h-screen bg-cyan-900 text-primary">{/* body */}

      <div>{/* content wrapper */}
        <div>
          <nav>
            <div>
              <h1 className='text-2xl font-extrabold uppercase p-4 border-b border-cyan-700'>
                <a href="/">Leaderboard</a>
              </h1>
            </div>
            <ul>
              <li>
                <button>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button>
                  <span>About</span>
                </button>
              </li>
              <li>
                <button>
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>{/* end navbar */}

        <div className='px-16 py-6'>{/* main content wrapper */}
          <div className='flex justify-center md:justify-end'>
            <button>Log in</button>
            <button className='ml-2'>Sign up</button>
          </div>

          <div>{/* header */}
            <h2 className='text-3xl font-extrabold'>Ninjas</h2>
            <h3 className='text-2xl font-extrabold'>Leaderboard</h3>
          </div>

          <div>{/* cards wrapper */}
            <h4 className='text-4xl font-extrabold mt-12 pb-2'>Winners</h4>

            <div className='mt-8 border-b border-cyan-400'>

              {/* cards go here */}
              <div className="bg-white rounded overflow-hidden shadow-lg shadow-cyan-500 relative">{/* CARD */}
                <img className='w-full h-32 sm:h-48 object-cover' src='https://res.cloudinary.com/degg5zebq/image/upload/v1696758941/Game%20characters/Game_character_4_tmvlol.png' alt='character img'></img>
                <div className='m-4 text-secondary'>
                <div className="flex items-center">
                  <div className='text-2xl font-extrabold animate-bounce'>Alex</div>
                  <div className='bg-cyan-900 text-white font-bold rounded-full w-40 p-2 ml-auto animate-pulse'>{/* badge pt */}
                    <div className='flex items-center justify-center'>860pt</div>
                  </div>
                </div>
                  <img src='' alt='stars img'></img>
                  <button>-</button><span>score</span><button>+</button>
                  <div>Divario: ...</div>
                </div>
                <div className='bg-white text-secondary text-6xl font-extrabold w-20 rounded-full p-3 absolute top-0 ml-3 mt-8 animate-bounce'>{/* badge position */}
                  <div className='flex items-center justify-center'>1</div>
                </div>
              </div>

            </div>

            <div className='flex'>
              <button className='font-bold animate-bounce mt-12 pb-2'>Add Player</button>
            </div>

            <div>{/* CARD */}
                <div>
                  <span className='text-2xl font-extrabold'>Jackx</span>
                  <span className='text-2xl font-extrabold'>4</span>
                  <span><img src='' alt='stars img'></img></span>
                  <span className='font-bold animate-pulse'>420pt</span>
                  <button>-</button><span>score</span><button>+</button>
                  <span>Divario: ...</span>
                </div>
              </div>

          </div>{/* cards wrapper */}

        </div>{/* main content wrapper */}
      </div>

    </div>
  )
}
