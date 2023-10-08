import React from 'react';
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <div className="h-screen bg-cyan-900 text-gray-300">{/* body */}

      <div>{/* content wrapper */}
        <div>
          <nav>
            <div>
              <h1>
                <a className='text-3xl font-extrabold'href="/">Leaderboard</a>
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

        <div>{/* main content wrapper */}
          <div>
            <button>Log in</button>
            <button>Sign up</button>
          </div>

          <div>{/* header */}
            <h2 className='text-3xl font-extrabold'>Ninjas</h2>
            <h3 className='text-2xl font-extrabold'>Leaderboard</h3>
          </div>

          <div>{/* cards wrapper */}
            <h4 className='text-4xl font-extrabold'>Winners</h4>

            <div>
              {/* cards go here */}

              <div>{/* CARD */}
                <img src='https://res.cloudinary.com/degg5zebq/image/upload/v1696758941/Game%20characters/Game_character_4_tmvlol.png' alt='character img'></img>
                <div>
                  <div className='text-2xl font-extrabold animate-bounce' >Alex</div>
                  <div className='text-2xl font-extrabold animate-bounce'>1</div>
                  <img src='' alt='stars img'></img>
                  <div className='font-bold animate-pulse'>860pt</div>
                  <button>-</button><span>score</span><button>+</button>
                  <div>Divario: ...</div>
                </div>
              </div>

            </div>

            <div>
              <button className='font-bold animate-bounce'>Add Player</button>
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
