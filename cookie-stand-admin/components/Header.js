import React from 'react';

function Header() {
  return (
    <>
      <header className='flex items-center justify-between p-4 text-gray-50 bg-cyan-900'>
        <h1 className="text-4xl font-bold">
          Cookie Stand Admin🍪
        </h1>
        <button className='underline text-gray-50 p-2  hover:bg-amber-400 duration-300 hover:text-black hover:font-bold hover:no-underline hover:rounded-xl'>Overview</button>
      </header>
    </>
  )
}

export default Header;