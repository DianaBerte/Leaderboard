import { useState } from "react";

const MenuAndBurger = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
        <div className='md:col-span-1 md:flex md:justify-end '>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <div className='px-4 cursor-pointer md:hidden' id='burger' onClick={toggleMenu}> {/* from md up: hidden */}
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              </div>
            </div>
          </nav>

            {isVisible && (
            <ul className='mt-4 -mx-14 block absolute' id='menu'>{/* from md up: visible */}
              <li className='py-1 flex justify-end'> {/* flex justify-end: content to the right */}
                <button className='hover:scale-110 hover:text-white px-4 flex justify-end transition-all'>
                  <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                </button>
              </li>
              <li className='py-1 flex justify-end'>
                <button className='hover:scale-110 hover:text-white px-4 flex justify-end transition-all'>
                  <span>About</span>
                  <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                </button>
              </li>
              <li className='py-1 flex justify-end'>
                <button className='hover:scale-110 hover:text-white px-4 flex justify-end transition-all'>
                  <span>Contact</span>
                  <svg xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </button>
              </li>
              <li className='py-1 flex justify-end'>
              <button className='hover:scale-110 hover:text-white px-4 flex justify-end transition-all'>
                <span>Log In</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              </button>
            </li>
            <li className='py-1 flex justify-end'>
              <button className='hover:scale-110 hover:text-white px-4 flex justify-end transition-all'>
                <span>Sign Up</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" /></svg>
              </button>
            </li>
            </ul>)}
        </div>
        </>
    );
};

export default MenuAndBurger;