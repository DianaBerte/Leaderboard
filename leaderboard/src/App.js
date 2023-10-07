import React from 'react';
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <div className="h-screen bg-cyan-900">
      <div className="bg-black">
        <div className='bg-pink-400'>
          <h5 className='text-3xl text-yellow-100 font-bold underline'>Hey</h5>
        </div>
        <p className='text-red-200'>hello</p>
        <h1 className="text-3xl text-cyan-500 font-bold underline">
          bye
        </h1>
      </div>
    </div>
  )
}
